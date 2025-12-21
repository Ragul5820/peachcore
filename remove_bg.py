from PIL import Image

try:
    img = Image.open(r'C:/Users/Ragul/.gemini/antigravity/brain/253c5b3b-f3e9-4edc-9b7e-402fd6c70186/uploaded_image_1765950451868.png')
    img = img.convert('RGBA')
    datas = img.getdata()
    newData = []
    for item in datas:
        # Change all white (also shades of whites) pixels to transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)
    img.save(r'd:/PCS/public/logo-transparent.png', 'PNG')
    print("Successfully created logo-transparent.png")
except Exception as e:
    print(f"Error: {e}")
