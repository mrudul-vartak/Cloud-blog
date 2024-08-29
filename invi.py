from PIL import Image, ImageDraw, ImageFont

# Load the image
image_path = "/mnt/data/Invitation (1).jpg"
image = Image.open(image_path)

# Define the new text
new_text = [
    "We are thrilled to invite you to join us in celebrating the love and commitment of our beloved daughter.",
    "Engagement Invitation",
    "Mrunal & Yash",
    "June",
    "Sunday, 30th, 06:00 PM",
    "Divya Palace 51, New Devas Road, Opp. Chandragupt Talkies, Indore",
    "Your presence will make this special day even more memorable.",
    "RSVP: Smt. Anjali & Yogesh Vartak 9425911443"
]

# Define positions for the text
positions = [
    (150, 200),  # We are thrilled to invite you...
    (220, 300),  # Engagement Invitation
    (280, 380),  # Mrunal & Yash
    (350, 450),  # June
    (150, 500),  # Sunday, 30th, 06:00 PM
    (150, 600),  # Divya Palace 51...
    (150, 700),  # Your presence...
    (150, 800)   # RSVP
]

# Load a font
font_path = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
font = ImageFont.truetype(font_path, 40)

# Draw the new text on the image
draw = ImageDraw.Draw(image)

for text, position in zip(new_text, positions):
    draw.text(position, text, font=font, fill="black")

# Save the edited image
edited_image_path = "/mnt/data/Edited_Invitation.jpg"
image.save(edited_image_path)

# Return the path of the edited image
edited_image_path
