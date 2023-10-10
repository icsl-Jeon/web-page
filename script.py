import os
from PIL import Image

image_root_folder = "C:\\Users\\junbs\\Documents\\GitHub\\web-page\\public\\images\\"
compression_level = 9

for foldername, subfolders, filenames in os.walk(image_root_folder):
    for subfolder in subfolders:
        subfolder_path = (os.path.join(image_root_folder,subfolder))
        main_png_path = os.path.join(subfolder_path, "main.png")
        if os.path.exists(main_png_path):
            image = Image.open(main_png_path)
            output_image_path = os.path.join(subfolder_path, "main-min.png")
            image.save(output_image_path, optimize=True, quality=compression_level)

