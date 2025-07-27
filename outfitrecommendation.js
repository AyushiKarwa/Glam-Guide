const outfitsDatabase = {
    apple: {
        casual: {
            work: [{ outfit: "V-neck blouse + High-waisted straight-leg trousers (dark color) + Pointed-toe flats", image: "Apple Casual Work.jpg" }],
            party: [{ outfit: " wrap dress with ruching (bold color) + strappy sandals + statement earrings.", image:"Apple casual Party.jpg"}],
            wedding: [{ outfit: " empire waist maxi dress + nude pumps + delicate bracelet", image: "Apple Casual wedding.jpg" }],
            casual: [{ outfit: " striped tshirt  + straight fit jeans + sneakers", image: "Apple Casual Casual.jpg" }]
            
        },
        formal: {
            wedding: [{ outfit: "Fit-and-flare midi dress + dainty earrings + matching clutch + heels", image: "Apple formal wedding.jpg" }],
            work: [{ outfit: "Button-up blouse with vertical stripes + high waisted wide leg pants + classic pumps + sleek watch", image: "Apple work formal.jpg" }],
            party: [{ outfit: "Sleeveless midi dress + chic clutch + heels",image: "Apple formal party.jpg" }],
            casual: [{ outfit: "Fitted knitwear sweater + pleated skirt + block heel ankle boots + stud earrings", image: "Apple Formal casual.jpg" }]
            
        },
        sporty: {
            work: [{ outfit: "Polo tshirt + high waisted jeans + sleek, minimalist sneakers", image: "Apple sporty work.jpg" }],
            party: [{ outfit: "Crop studded top + pleated skirt + chunky sneakers", image: "Apple Sporty party.jpg" }],
            wedding: [{ outfit: "Wrap up dress + white block heels", image: "apple sporty wedding.jpg" }],
            casual: [{ outfit: "Zip-up track jacket + high waisted joggers + running shoes + baseball cap", image: "apple sporty casual.jpg" }]
            
        },
        chic: {
            wedding: [{ outfit: "Midi dress with an empire waist + embellished heels + pearl drop earrings + clutch", image: "apple chic wedding.jpg" }],
            work: [{ outfit: "Silky blouse with a wrap detail + pencil skirt + pointed-toe pumps + structured tote bag", image: "Apple chic work.jpg" }],
            party: [{ outfit: "knee length wrap dress + Strappy heels + beaded clutch", image: "Apple chic party.jpg" }],
            casual: [{ outfit: "flowy blouse with lace + high waisted jeans + ballet flats", image: "apple chic casual.jpg" }],
            
        },
        boho: {
            
            work: [{ outfit: "sleeveless top + hoop earrings + white straight leg jeans + loafers + sleek watch + sleek bag", image: "apple boho work.jpg" }],
            party: [{ outfit: "flowy dress with floral prints + suede boots + stacked bangles", image: "apple boho party.jpg" }],
            wedding: [{ outfit: "lace empire waist gown + metallic sandals + fancy clutch + gemstone drop earrings", image: "apple Boho wedding.jpg" }],
            casual: [{ outfit: "embroidered blouse + high waisted jeans + flat leather sandals + beaded bracelets", image: "Apple boho casual.jpg" }]

    },
    },
pear: {
    casual: {
        work: [{ outfit: "Structured blouse with ruffles + wide leg trousers + pointed toe flats + bold necklace", image: "Pear casual work.jpg" }],
        party: [{ outfit: "Fit and flare dress + block heel sandals + statement earrings + small clutch", image: "pear casual party.jpg" }],
        wedding: [{ outfit: "Empire waist gown + nude heels", image: "Pear casual wedding.jpg" }],
        casual: [{ outfit: "Casual casual, a line tunic + black jeans", image: "pear casual Casual.jpg" }]
    },
    formal: {
        wedding: [{ outfit: "floral maxi dress + nude colored block heels ", image: "Pear formal wedding.jpg" }],
        work: [{ outfit: " button-down shirt with puff sleeves + high-waisted tailored trousers", image: "" }],
        party: [{ outfit: "fit and flare black midi dress + black strappy heels", image: "Pear formal party.jpg" }],
        casual: [{ outfit: "floral maxi dress + nude colored block heels", image: "Pear formal casual.jpg" }]
    },
    sporty: {
        work: [{ outfit: "tapered trousers + low profile sneakers", image: "Pear sporty work.jpg" }],
        party: [{ outfit: "bodysuit + tailored trousers + platform sneakers", image: "Pear sporty party.jpg" }],
        wedding: [{ outfit: "flowy midi dress with a gold detailed belt", image: "Peae sporty wedding.jpg" }],
        casual: [{ outfit: "loose fitted graphic tee + flared leggings", image: "Pear sporty casual.jpg" }]
        
    },
    chic: {
        wedding: [{ outfit: "empire waist gown with delicate floral embroidery", image: "Pear chic wedding.jpg" }],
        work: [{ outfit: "peplum top + tailored biscuits", image: "Pear chic Work.jpg" }],
        party: [{ outfit: "mini dress + sparkly mules", image: "Pear chic party.jpg" }],
        casual: [{ outfit: "flowy blouse + satin skirt", image: "Pear chic casual.jpg" }]
    },
    boho: {
        
        work: [{ outfit: "peasant top + denim skirt", image: "Pear boho work.jpg" }],
        party: [{ outfit: " tiered maxi dress with flutter sleeves", image: "Pear boho party.jpg" }],
        wedding: [{ outfit: "empire waist gown", image: "Pear boho wedding.jpg" }],
        casual: [{ outfit: "flowy top with balloon sleeves + black trousers", image: "Pear, casual,boho.jpg" }]
        
    },
},
hourglass: {
        casual: {
            work: [{ outfit: "tailored single Breasted Blazer", image: "Hourglass casual work.png" }],
            party: [{ outfit: "wrap Dresses", image: "Hourglass casual Party.png" }],
            wedding: [{ outfit: "Plunging V neck Lace Bridal dresses", image: "hourglass casual wedding.png" }],
            casual: [{ outfit: "high waisted flared trouser", image: "Hourglass casual casual.png" }],
            
        },
        formal: {
            wedding: [{ outfit: "Bateau A line dresses", image: "Hourglass formal wedding.png" }],
            work: [{ outfit: "straight Pants + heels + coat + shirt top", image: "Hourglass formal work.png" }],
            party: [{ outfit: "Square- neckfit and flaredresses", image: "Hourglass formal party.png" }],
            casual: [{ outfit: " v - neck jumpsuit", image: "Hourglass formal casual.png" }],
            
        },
        sporty: {
            work: [{ outfit: " straight pants + full sleeves top + oversize coat", image: "Hourglass sporty work.png" }],
            party: [{ outfit: "bell bottom pant + v- neck top + a sling bag", image: "Hourglass sporty party.png" }],
            wedding: [{ outfit: " Belled Dresses ", image: "Hourglass sporty wedding.png" }],
            casual: [{ outfit: "oversize pants + shoes + oversize top with v- neck", image: "Hourglass sporty casual.png" }],
            
        },
        chic: {
            wedding: [{ outfit: "Mermaid Dresses", image: "Hourglass chic wedding.png" }],
            work: [{ outfit: " Belled Jumpsuit", image: "hourglass chic work.png" }],
            party: [{ outfit: "wrap Dresses", image: "hourglass chic party.png" }],
            casual: [{ outfit: "Baggy trousers + shirt type top + sling bag", image: "Hourglass chic casual.png" }],
            
        },
        boho: {
            
            work: [{ outfit: "V-neck top + Straight pants + cross neck coat", image: "hourglass boho work.png" }],
            party: [{ outfit: "cross v-neck top + baggy pants + pencil heels", image: "houglass boho party.png" }],
            wedding: [{ outfit: "Form fitting dresses", image: "Hourglass boho wedding.png" }],
            casual: [{ outfit: "v-neck top + bell bottom jeans + heels", image: "Hourglass boho casual.png" }]
            
    }

},
rectangle: {
casual: {
    work: [{ outfit: "oversize full sleeves top + boyfriend jeans", image: "rectangle casual work.png" }],
    party: [{ outfit: "Flowy Top + A-line Skirt", image: "recatngle casual party.png" }],
    wedding: [{ outfit: "sweetheart neck ball Gown", image: "recatangle casual wedding.png" }],
    casual: [{ outfit: "Polo tshirt + high waisted jeans + sleek, minimalist sneakers", image: "rectangle casual casual.png" }],
    
},
formal: {
    wedding: [{ outfit: "Frilled gown", image: "Rectangle formal wedding.png" }],
    work: [{ outfit: "Asymmetric Bem skirts", image: "Rectangle formal work.png" }],
    party: [{ outfit: "square neck middi dress", image: "Rectangle formal party.png" }],
    casual: [{ outfit: "shirt type Top + Belled skirts", image: "Rectangle formal casual.png" }],
    
                
},
sporty: {
    work: [{ outfit: "straight pents + pencil heels + close neck tshirt type", image: "Rectangle sporty work.png" }],
    party: [{ outfit: " square neck straight dress", image: "Rectangle sporty party.png" }],
    wedding: [{ outfit: "straight lehenga with a sharara touch", image: "Rectangle sporty wedding.png" }],
    casual: [{ outfit: "Straight pants + closed neck top with sling bag ", image: "Rectangle sporty casual.png" }],
    
},
chic: {
    work: [{ outfit: "shirt + coat + bell bottom pants + flats ", image: "Rectangle chic work.png" }],
    wedding: [{ outfit: " shoulderless top + with frilled skirts ", image: "Rectangel chic wedding.png" }],
    party: [{ outfit: "straight one piece dress", image: "rectangle chic party.png" }],
    casual: [{ outfit: "jacket + shirt + straight pants ", image: "Rectangle chic casual.png" }],
    
},
boho: {
    work: [{ outfit: "coat+straight oversize pants with bag and heels", image: "Rectangle Boho work.png" }],
    party: [{ outfit: "Straight pants+ bag + full shirt type oversized top", image: "rectangle boho party.png" }],
    wedding: [{ outfit: "Queen Anne Tulle bridal Gown", image: "Rectangle boho wedding.png" }],
    casual: [{ outfit: "straight sleeveless one piece + short jacket + bag + shoes ", image: "Rectangle boho casual.png" }]
    
}
}
}
