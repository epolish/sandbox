Template is responsive and looks good in next browsers:

    Google Chrome 51.0.2704.106
    Opera 38.0
    Firefox 47.0
    Microsoft Edge 38.14393.1066.0


Functional problems:
    
    Code-behind has many whitespaces and empty strings.
    
    Search results page doesnt stylized(controls, text etc.).
    Search image doesn't work by clicking. For searching, person must press enter.
    On selection line doesn't work search by field "ENTER REG".
    
    When I'm on page with specific product, there's no image or thumbnail, as same as in a basket.
    Static pages links in footer(Terms & Condition|Privacy|Police|Return|Policy|About Us|Contact Us) don't work.
    On page with categories(Home >> CAR LIGHTING e.g.) doesn't work button "View All" on each category.
    On section "Latest news" doesn't work "Read More" button on each news.
    404 page isn't stylized(default django 404 page).
    I18n(Internationalization) tabs don't work.
    
    Checkouting with paypal doesn't work.
    In checkout page, button "next" doesn't stylized.
    There's no notice when I entered invalid email in checkout page.
    

Not found:

        http://geniusautoparts.com/favicon.ico
        http://geniusautoparts.com/catalogue/static/js/slidebars.min.js 
        http://geniusautoparts.com/catalogue/static/js/retina.min.js 
        http://geniusautoparts.com/catalogue/static/js/jquery.backstretch.min.js


Syntax error in the next file:

    cmpny16427.pcapredict.com/js/sensor.js: Uncaught SyntaxError: Unexpected token <


Login/Register page warning(because of https):

    warning http://geniusautoparts.com/accounts/login/ includes a password
    or credit card input in a non-secure context.
    A warning has been added to the URL bar.
    For more information, see https://goo.gl/zmWq3m.


Google PageSpeed Insights:

    Mobile:
        Poor(42 / 100) : This page is not optimized and is likely to deliver a slow user experience.
        Please prioritize and apply the recommendations below.
        Possible Optimizations: Enable compression,
        Eliminate render-blocking JavaScript and CSS in above-the-fold content,
        Leverage browser caching, Optimize images, Minify HTML,
        Reduce server response time, Minify JavaScript, Minify CSS

    Desktop:
        Poor(50 / 100) : This page is not optimized and is likely to deliver a slow user experience.
        Please prioritize and apply the recommendations below.
        Possible Optimizations: Enable compression, Leverage browser caching,
        Eliminate render-blocking JavaScript and CSS in above-the-fold content,
        Optimize images, Minify HTML, Reduce server response time, Minify JavaScript, Minify CSS


W3C Validator(index page):

    Error: A document must not include both a meta element with an http-equiv attribute
    whose value is content-type, and a meta element with a charset attribute.
        From line 19, column 9; to line 19, column 30
        <meta charset="utf-8">
    Error: A document must not include more than one meta element
    with its name attribute set to the value description.
        From line 22, column 9; to line 22, column 44
        <meta name="description" content="">
    Error: Element div not allowed as child of element button in this context.
    (Suppressing further errors from this subtree.)
        From line 127, column 29; to line 127, column 57
        <div class="search-btn-wrap"></div>
        Contexts in which element div may be used:
        Where flow content is expected.
        As a child of a dl element.
        Content model for element button:
        Phrasing content, but there must be no interactive content descendant.
    Error: Element div not allowed as child of element button in this context.
    (Suppressing further errors from this subtree.)
        From line 139, column 25; to line 139, column 51
        <div class="badge badge-1">2</div
        Contexts in which element div may be used:
        Where flow content is expected.
        As a child of a dl element.
        Content model for element button:
        Phrasing content, but there must be no interactive content descendant.
    Error: Element div not allowed as child of element button in this context.
    (Suppressing further errors from this subtree.)
        From line 145, column 25; to line 145, column 42
        <div class="icon">
        Contexts in which element div may be used:
        Where flow content is expected.
        As a child of a dl element.
        Content model for element button:
        Phrasing content, but there must be no interactive content descendant.
    Error: Element div not allowed as child of element button in this context.
    (Suppressing further errors from this subtree.)
        From line 150, column 25; to line 150, column 45
        <div class="summary">
        Contexts in which element div may be used:
        Where flow content is expected.
        As a child of a dl element.
        Content model for element button:
        Phrasing content, but there must be no interactive content descendant.
    Warning: The form role is unnecessary for element form.
        From line 435, column 25; to line 435, column 94
        <form id="vrm_search_form" role="form" method="get" action="/search/">
    Error: Bad value  for attribute name on element select: Must not be empty.
        From line 469, column 29; to line 469, column 73
        <select class="" name="" id="select_vehicle">
    Error: Bad value  for attribute name on element select: Must not be empty.
        From line 484, column 29; to line 484, column 71
        <select class="" name="" id="select_brand">
    Error: Bad value  for attribute name on element select: Must not be empty.
    From line 491, column 29; to line 491, column 71
        <select class="" name="" id="select_model">
    Error: Bad value  for attribute name on element select: Must not be empty.
        From line 498, column 29; to line 498, column 70
        <select class="" name="" id="select_type">
    Error: Duplicate ID id_quantity.
        From line 745, column 9; to line 745, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 824, column 9; to line 824, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 903, column 9; to line 903, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 982, column 9; to line 982, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1059, column 9; to line 1059, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1138, column 9; to line 1138, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1217, column 9; to line 1217, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1300, column 9; to line 1300, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1383, column 9; to line 1383, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1466, column 9; to line 1466, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1549, column 9; to line 1549, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1632, column 9; to line 1632, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1715, column 9; to line 1715, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1798, column 9; to line 1798, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Error: Duplicate ID id_quantity.
        From line 1881, column 9; to line 1881, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
    Warning: The first occurrence of ID id_quantity was here.
        From line 666, column 9; to line 666, column 74
        <input id="id_quantity" name="quantity" type="hidden" value="1" />
