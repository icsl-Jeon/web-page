import os
import frontmatter
import json

# Define the directory where your MDX files are located
mdx_directory = 'page-old'

# Define the path to your blog.json file
json_file = 'blog.json'

# Initialize an empty list to store the extracted metadata
metadata_list = []

# Traverse the MDX files in the directory
for filename in os.listdir(mdx_directory):
    if filename.endswith(".mdx"):
        # Read the content of the MDX file and parse front matter
        with open(os.path.join(mdx_directory, filename), 'r', encoding='utf-8') as file:
            content = file.read()
            post = frontmatter.loads(content)
            
        # Extract the relevant metadata fields
        title = post['title']
        description = post.get('description', '')
        tags = post.get('keywords', '').split(', ')
        link = f'/blog/{os.path.splitext(filename)[0]}'  # Assumes file is named post1.mdx, etc.
        image = post.get('thumbnail', '')

        image = post['thumbnail'] if 'thumbnail' in post else ''
        
        # Modify the image path to include '-min' before the file extension if it's not empty
        if image:
            root, ext = os.path.splitext(image)
            image = f"{root}-min{ext}"

        date = post.get('date', '')

        # Create a dictionary with the extracted metadata
        metadata_dict = {
            "title": title,
            "description": description,
            "tags": tags,
            "link": link,
            "image": image,
            "date": date.strftime("%Y-%m-%d")
        }

        # Append the metadata to the list
        metadata_list.append(metadata_dict)

# Load the existing JSON data from the file
with open('blog.json', 'r') as json_file:
    existing_data = json.load(json_file)

# Extend the existing JSON data with the new metadata
existing_data.extend(metadata_list)

# Write the updated JSON data back to the file
with open('blog.json', 'w') as json_file:
    json.dump(existing_data, json_file, indent=2)

print(f"Metadata from {len(metadata_list)} MDX files added to {json_file}")
