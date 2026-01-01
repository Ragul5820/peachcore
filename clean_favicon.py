from PIL import Image, ImageDraw

def clean_favicon():
    input_path = 'public/logo-transparent.png'
    output_path = 'public/favicon-clean.png'
    
    try:
        # Open the image
        img = Image.open(input_path).convert("RGBA")
        width, height = img.size
        
        # 1. Slight crop to "zoom in" (removes edges where artifacts likely live)
        # Shaving off 5% from each side
        border = int(width * 0.05)
        img = img.crop((border, border, width - border, height - border))
        width, height = img.size
        
        # 2. Create a circular mask
        mask = Image.new('L', (width, height), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, width, height), fill=255)
        
        # 3. Apply the mask
        result = Image.new('RGBA', (width, height), (255, 255, 255, 0))
        result.paste(img, (0, 0), mask=mask)
        
        # 4. Save as favicon-clean.png
        result.save(output_path, 'PNG')
        print(f"Successfully cleaned favicon! Saved to {output_path}")
        
    except Exception as e:
        print(f"Error cleaning favicon: {e}")

if __name__ == "__main__":
    clean_favicon()
