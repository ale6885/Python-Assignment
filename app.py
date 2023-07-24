from flask import Flask, render_template, request, redirect, session
from datetime import datetime

app = Flask(__name__)

#list to store blog posts
blog_posts = []

@app.route('/')
def index():
    return render_template('index.html', posts=blog_posts)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/post')
def post():
    title = request.args.get('title')
    content = request.args.get('content')
    date = request.args.get('date')
    new_post = {
        'title': title,
        'content': content,
        'date': date
    }
    return render_template('post.html', new_post=new_post)

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/privacy')
def privacy():
    return render_template('privacy.html')

@app.route('/new', methods=['GET', 'POST'])
def new_post():
    if request.method == 'POST':
        title = request.form['title']
        content = request.form['content']
        date = request.form['date']  # Get the date from the form
        if title and content and date:
            post = {
                'title': title,
                'content': content,
                'date': date
            }
    blog_posts.append(post)  # Add the post to the list
            # Redirect to the /post route to display the newly created post
    return redirect('/post')
    return render_template('new_post.html', today_date=date.today())

if __name__ == '__main__':
    app.run(debug=True)

