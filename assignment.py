# Aim: Simulate a bouncing ball in Pygame.
# Objective: Learn motion simulation, collision detection, and rendering with Pygame.

import pygame
import sys

# Initialize Pygame
pygame.init()

# Screen dimensions
WIDTH, HEIGHT = 800, 600

# Colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# Screen setup
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Bouncing Ball Simulation")

# Clock for controlling frame rate
clock = pygame.time.Clock()

# Ball properties
ball_radius = 20
ball_x = WIDTH // 2
ball_y = HEIGHT // 2
ball_dx = 4  # Horizontal velocity
ball_dy = 3  # Vertical velocity

def simulate_bouncing_ball():
    """
    Simulates a ball bouncing within the screen boundaries.
    """
    global ball_x, ball_y, ball_dx, ball_dy

    running = True
    while running:
        # Handle events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Update ball position
        ball_x += ball_dx
        ball_y += ball_dy

        # Check for collisions with the window edges
        if ball_x - ball_radius <= 0 or ball_x + ball_radius >= WIDTH:
            ball_dx = -ball_dx  # Reverse horizontal direction
        if ball_y - ball_radius <= 0 or ball_y + ball_radius >= HEIGHT:
            ball_dy = -ball_dy  # Reverse vertical direction

        # Clear screen
        screen.fill(BLACK)

        # Draw the ball
        pygame.draw.circle(screen, RED, (ball_x, ball_y), ball_radius)

        # Update the display
        pygame.display.flip()

        # Control the frame rate
        clock.tick(60)

    pygame.quit()
    sys.exit()

if __name__ == "__main__":
    simulate_bouncing_ball()
