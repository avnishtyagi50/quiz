/*let quiz = [
    {
        question: "What does HTML stand for?",
        option: [
            "Hyper Tag Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language",
        ],
        answer: 2,
    },
    {
        question: "What does CSS stand for?",
        option: [
            "Computing Style Sheet",
            "Creative Style System",
            "Cascading Style Sheet",
            "Creative Styling Sheet",
        ],
        answer: 3,
    },
    {
        question: "Where should a CSS file be referenced in a HTML file?",
        option: [
            "Before any HTML code",
            "After all HTML code",
            "Inside the head section",
            "Inside the body section",
        ],
        answer: 3,
    },
    {
        question:
            "What is the correct format for aligning written content to the center of the page in CSS?",
        option: [
            "Text-align:center;",
            "Font-align:center;",
            "Text:align-center;",
            "Font:align-center;",
        ],
        answer: 1,
    },
    {
        question:
            "What is the correct format for changing the background colour of a div in CSS?",
        option: [
            "Bg-color:red;",
            "bg:red;",
            "Background-colour:red;",
            "Background-color:red;",
        ],
        answer: 4,
    },
    {
        question: "Choose the correct HTML tag for the largest heading",
        option: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: 4,
    },
    {
        question: "Which is the correct CSS syntax?",
        option: [
            "Body {color: black}",
            "{body;color:black}",
            "{body:color=black(body}",
            "body:color=black",
        ],
        answer: 1,
    },
    {
        question:
            "In CSS, what is the correct option to select all the tags on a page?",
        option: ["<p> { }", ".p { }", "#p { }", "* { }"],
        answer: 4,
    },
    {
        question: "Select the correct HTML tag to make a text italic?",
        option: ["Italic", "II", "IT", "I"],
        answer: 4,
    },
    {
        question: "Select the correct HTML tag to make a text bold.",
        option: ["bo", "bb", "b", "bold"],
        answer: 3,
    },


];*/




let quiz = [
    { question: "What does HTML stand for?", option: ["Hyper Tag Markup Language", "Hyper Text Markup Language", "Hyperlinks Text Mark Language", "Hyperlinking Text Marking Language"], answer: 2 },
    { question: "What does CSS stand for?", option: ["Computing Style Sheet", "Creative Style System", "Cascading Style Sheet", "Creative Styling Sheet"], answer: 3 },
    { question: "Where should a CSS file be referenced in an HTML file?", option: ["Before any HTML code", "After all HTML code", "Inside the head section", "Inside the body section"], answer: 3 },
    { question: "What is the correct format for aligning written content to the center of the page in CSS?", option: ["Text-align:center;", "Font-align:center;", "Text:align-center;", "Font:align-center;"], answer: 1 },
    { question: "What is the correct format for changing the background colour of a div in CSS?", option: ["Bg-color:red;", "bg:red;", "Background-colour:red;", "Background-color:red;"], answer: 4 },
    { question: "Choose the correct HTML tag for the largest heading", option: ["<heading>", "<h6>", "<head>", "<h1>"], answer: 4 },
    { question: "Which is the correct CSS syntax?", option: ["Body {color: black}", "{body;color:black}", "{body:color=black(body}", "body:color=black"], answer: 1 },
    { question: "In CSS, what is the correct option to select all the tags on a page?", option: ["<p> { }", ".p { }", "#p { }", "* { }"], answer: 4 },
    { question: "Select the correct HTML tag to make a text italic?", option: ["Italic", "II", "IT", "I"], answer: 4 },
    { question: "Select the correct HTML tag to make a text bold.", option: ["bo", "bb", "b", "bold"], answer: 3 },
    { question: "Which HTML attribute is used to define inline styles?", option: ["style", "font", "styles", "css"], answer: 1 },
    { question: "What does the CSS 'z-index' property do?", option: ["Controls the horizontal position", "Controls the stacking order", "Controls the visibility", "Controls the text size"], answer: 2 },
    { question: "Which HTML element defines the footer of a page?", option: ["<footer>", "<end>", "<bottom>", "<aside>"], answer: 1 },
    { question: "Which CSS property is used to change the font size?", option: ["font-size", "text-size", "font", "font-style"], answer: 1 },
    { question: "How do you make a website mobile-friendly?", option: ["By using large font sizes", "By using responsive web design", "By avoiding media queries", "By using fixed layout"], answer: 2 },
    { question: "What is the correct way to add a comment in CSS?", option: ["<!-- Comment -->", "// Comment", "/* Comment */", "comment: this"], answer: 3 },
    { question: "Which HTML element is used to display an image?", option: ["<img>", "<image>", "<src>", "<picture>"], answer: 1 },
    { question: "Which CSS property is used to change the background color of an element?", option: ["bg-color", "background-color", "color", "background"], answer: 2 },
    { question: "Which HTML element is used for creating an unordered list?", option: ["<ul>", "<ol>", "<li>", "<list>"], answer: 1 },
    { question: "Which CSS property controls the text color?", option: ["text-color", "font-color", "color", "text-style"], answer: 3 },
    { question: "What does the CSS 'display' property do?", option: ["Controls the layout of elements", "Defines element position", "Defines element size", "Defines visibility"], answer: 1 },
    { question: "Which HTML element defines the main content of a document?", option: ["<main>", "<content>", "<body>", "<header>"], answer: 1 },
    { question: "Which property in CSS is used to define the space between the content and the border?", option: ["margin", "padding", "border-spacing", "border-width"], answer: 2 },
    { question: "Which tag is used for links in HTML?", option: ["<a>", "<link>", "<href>", "<button>"], answer: 1 },
    { question: "How do you create a table in HTML?", option: ["<table>", "<tb>", "<tableData>", "<dataTable>"], answer: 1 },
    { question: "What does the 'float' property do in CSS?", option: ["Moves elements horizontally", "Moves elements vertically", "Wraps content around an element", "Changes the font size"], answer: 3 },
    { question: "How do you change the font family in CSS?", option: ["font-family", "text-family", "font-style", "font-type"], answer: 1 },
    { question: "How do you add a border in CSS?", option: ["border-style", "border-color", "border-width", "All of the above"], answer: 4 },
    { question: "How do you define a class in CSS?", option: [".class", "#class", "<class>", ".className"], answer: 1 },
    { question: "Which property is used to change the font of a text in CSS?", option: ["font-family", "font-style", "font-size", "font-weight"], answer: 1 },
    { question: "What does 'position: absolute;' do in CSS?", option: ["Positions the element at the top left of the page", "Positions the element relative to its normal position", "Positions the element relative to its closest positioned ancestor", "Makes the element float"], answer: 3 },
    { question: "What is the correct HTML element to define navigation links?", option: ["<nav>", "<menu>", "<link>", "<nav-links>"], answer: 1 },
    { question: "What does the 'visibility' property do in CSS?", option: ["Makes an element invisible but it still takes space", "Completely hides the element", "Changes the transparency of an element", "None of the above"], answer: 1 },
    { question: "Which HTML element is used to create a form?", option: ["<input>", "<form>", "<button>", "<text>"], answer: 2 },
    { question: "Which tag is used to define a table row in HTML?", option: ["<tr>", "<td>", "<table>", "<th>"], answer: 1 },
    { question: "How can you add a background image in CSS?", option: ["background-image: url('image.jpg');", "image: url('image.jpg');", "bg-image: url('image.jpg');", "background-image='image.jpg';"], answer: 1 },
    { question: "What does 'display: none;' do in CSS?", option: ["Makes the element visible", "Hides the element but still takes up space", "Completely hides the element", "None of the above"], answer: 3 },
    { question: "Which of these CSS properties is used to create space between elements?", option: ["padding", "margin", "border", "spacing"], answer: 2 },
    { question: "What is the default value of the 'position' property in CSS?", option: ["static", "relative", "absolute", "fixed"], answer: 1 },
    { question: "Which of these CSS properties controls the layout of elements?", option: ["display", "position", "overflow", "float"], answer: 1 },
    { question: "Which of these elements is used for a line break in HTML?", option: ["<br>", "<break>", "<line>", "<hr>"], answer: 1 },
    { question: "What is the correct syntax for including an external stylesheet in HTML?", option: ['<link rel="stylesheet" href="style.css">', '<stylesheet href="style.css">', '<link href="style.css" type="text/css" />', '<link rel="style" href="style.css">'], answer: 1 },
    { question: "How can you make a list appear horizontally in CSS?", option: ["list-style-type: none;", "display: block;", "display: inline;", "list-style-type: inline;"], answer: 3 },
    { question: "What is the correct syntax for an image tag in HTML?", option: ['<image src="img.jpg" />', '<img href="img.jpg" />', '<img src="img.jpg" />', '<image source="img.jpg" />'], answer: 3 },
    { question: "Which CSS property is used to control the space between the content and the border of an element?", option: ["margin", "padding", "border-spacing", "border-width"], answer: 2 },
    { question: "Which HTML element is used to define an area for a map?", option: ["<map>", "<area>", "<image>", "<img>"], answer: 1 },
    { question: "Which tag is used to define a paragraph in HTML?", option: ["<p>", "<para>", "<text>", "<div>"], answer: 1 },
    { question: "How do you add a comment in JavaScript?", option: ["<!-- Comment -->", "// Comment", "/* Comment */", "comment: this"], answer: 2 },
    { question: "What does the CSS 'z-index' property do?", option: ["Controls the horizontal position", "Controls the stacking order", "Controls the visibility", "Controls the text size"], answer: 2 },
    { question: "Which HTML tag is used to define the title of the document?", option: ["<title>", "<head>", "<meta>", "<h1>"], answer: 1 },
    { question: "What is the purpose of the <meta> tag in HTML?", option: ["Defines metadata", "Defines links", "Defines styling", "Defines script"], answer: 1 },
    { question: "Which of these HTML elements can be used to define an ordered list?", option: ["<ol>", "<ul>", "<list>", "<li>"], answer: 1 },
    { question: "Which HTML tag is used to define a hyperlink?", option: ["<link>", "<a>", "<url>", "<button>"], answer: 2 },
    { question: "What does the 'opacity' property do in CSS?", option: ["Makes the element invisible", "Changes the transparency of an element", "Controls the layout", "None of the above"], answer: 2 },
    { question: "How do you define a block of code in JavaScript?", option: ["function block {}", "block()", "{ code }", "function { code }"], answer: 3 },
    { question: "What is the correct HTML element for defining a section of content?", option: ["<section>", "<content>", "<article>", "<div>"], answer: 1 },
    { question: "What is the purpose of the <header> tag in HTML?", option: ["Defines a header for the page", "Defines a footer for the page", "Defines navigation", "Defines a section"], answer: 1 },
    { question: "Which CSS property controls the amount of space between letters in text?", option: ["letter-spacing", "text-spacing", "word-spacing", "font-spacing"], answer: 1 },
    { question: "Which of these is a valid CSS color?", option: ["#ff0000", "ff0000", "rgb(255, 0, 0)", "All of the above"], answer: 4 },
    { question: "How can you include an external JavaScript file?", option: ["<script src='file.js'></script>", "<js src='file.js'></js>", "<file src='file.js'></file>", "<script href='file.js'></script>"], answer: 1 }
];
