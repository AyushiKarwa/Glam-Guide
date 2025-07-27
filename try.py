# Install required libraries
# pip install pandas scikit-surprise

import pandas as pd
from surprise import SVD, Dataset, Reader
from surprise.model_selection import train_test_split
from surprise import accuracy
from surprise.model_selection import cross_validate

# Simulated data: User preferences for outfits
# In a real application, this data would come from user interactions with your system.
data_dict = {
    'user_id': [1, 1, 1, 2, 2, 3, 3, 3, 4],
    'outfit_id': [101, 102, 103, 101, 104, 102, 103, 105, 101],
    'rating': [5, 4, 3, 5, 4, 3, 2, 5, 4]  # Ratings given by users for outfits
}

# Convert to DataFrame
df = pd.DataFrame(data_dict)

# Prepare the data for the recommendation algorithm
reader = Reader(rating_scale=(1, 5))
data = Dataset.load_from_df(df[['user_id', 'outfit_id', 'rating']], reader)

# Split the data into training and test sets
trainset, testset = train_test_split(data, test_size=0.25)

# Use the SVD (Singular Value Decomposition) algorithm
algo = SVD()

# Train the model
algo.fit(trainset)

# Test the model
predictions = algo.test(testset)
accuracy.rmse(predictions)

# Function to recommend outfits for a user
def recommend_outfits(user_id, top_n=5):
    # Get a list of all outfit IDs
    all_outfits = df['outfit_id'].unique()
    
    # Get outfits the user has already rated
    rated_outfits = df[df['user_id'] == user_id]['outfit_id'].unique()
    
    # Predict ratings for all unrated outfits
    recommendations = []
    for outfit_id in all_outfits:
        if outfit_id not in rated_outfits:
            pred = algo.predict(user_id, outfit_id)
            recommendations.append((outfit_id, pred.est))
    
    # Sort recommendations by predicted rating in descending order
    recommendations.sort(key=lambda x: x[1], reverse=True)
    
    # Return the top N recommendations
    return recommendations[:top_n]

# Example: Get recommendations for user 1
user_id = 1
top_recommendations = recommend_outfits(user_id)
print(f"Top recommendations for User {user_id}:")
for outfit_id, score in top_recommendations:
    print(f"Outfit ID: {outfit_id}, Predicted Rating: {score:.2f}")
