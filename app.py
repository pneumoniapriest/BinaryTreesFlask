from flask import Flask,redirect,url_for,render_template
from flask.templating import render_template_string
import test
app = Flask(__name__)
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/learnmore")
def learn():
    return render_template("learnmore.html")

@app.route("/tryit")
def tryit():
    return render_template("tryit.html")

if __name__ == "__main__":
    app.run()