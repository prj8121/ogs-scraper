from bs4 import BeautifulSoup

# Sample HTML content
html_content = """
<html>
  <head>
    <title>Beautiful Soup Example</title>
  </head>
  <body>
    <h1>Welcome to BeautifulSoup</h1>
    <p>This is a simple example.</p>
  </body>
</html>
"""

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Extract and print the title text
title = soup.title.string
print(f"Title: {title}")

# Extract and print the text from the <h1> element
h1_text = soup.h1.string
print(f"H1 Text: {h1_text}")

# Extract and print the text from the <p> element
p_text = soup.p.string
print(f"P Text: {p_text}")
