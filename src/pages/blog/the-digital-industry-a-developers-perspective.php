<?php
  $path = $_SERVER['DOCUMENT_ROOT'];
  $path .= "/includes/";
  $current = 'blog';
?>

<!DOCTYPE html>
<html lang="en">

  <!-- META TAGS  -->
  <?php $meta_description = '';?>
  <?php $meta_keywords = '';?>

  <!-- PAGE TITLE -->
  <?php $page_title = "The Digital Industry: A Developers Perspective | Blog | Alex Clapperton";?>

  <!-- CRITICAL CSS - ABOVE THE FOLD -->
  <?php $critical_path = "<style type='text/css'>
    .gridGuide,.gridGuides{position:absolute;height:100%}h1,h2{color:#ff486e}h1,h2,h3{font-weight:600;margin:0 0 12px;line-height:1.5}h3,p{color:#2e353b}.btn_scrollTop,.siteNav_linkText,.skipLink,.skipLinks{text-align:center}.siteBanner_breadcrumbs,.siteNav,.siteNav_link{-webkit-box-direction:normal}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}.mainHeader_logo,h1,h2,h3{font-family:Dosis,sans-serif}@media (min-width:600px){body{padding-bottom:0}}h1{font-size:2em}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}h2{font-size:1.5em}@media screen and (min-width:400px){h2{font-size:1.75em}}@media screen and (min-width:768px){h2{font-size:2em}}@media screen and (min-width:992px){h2{font-size:2.15em}}h3{font-size:1.3em}@media screen and (min-width:400px){h3{font-size:1.45em}}@media screen and (min-width:768px){h3{font-size:1.7em}}p{font-size:1em;font-weight:400;line-height:1.7;margin:0 0 15px}.skipLink,a{color:#ff486e}@media screen and (min-width:400px){p{font-size:1.07143em}}@media screen and (min-width:600px){p{font-size:1.10714em}}@media screen and (min-width:768px){p{font-size:1.14286em}}@media screen and (min-width:992px){p{font-size:1.17857em}}@media screen and (min-width:1230px){p{font-size:1.19643em}}a{text-decoration:underline}.container{position:relative;padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.skipLinks{position:absolute;top:10px;left:0;width:100%;z-index:100}.skipLink{position:absolute;top:40%;left:10%;margin:0;font-size:14.7px;font-weight:600}.skipLink--hidden{border:0;width:130px;height:.0625rem;overflow:hidden;padding:0;position:absolute}.btn_scrollTop{display:block;position:fixed;right:-60px;bottom:20px;width:40px;height:40px;background:#ff486e;border-radius:50%;z-index:20;opacity:0;box-shadow:3px 4px 9px 0 rgba(0,0,0,.15)}.siteHeader,.siteNav{z-index:30;background:#fff}.btn_scrollIcon{width:50%;height:100%;fill:#fff}.siteHeader{position:relative;width:100%}@media (min-width:768px){.siteHeader{position:fixed;top:0;left:0;padding:5px 0}}.mainHeader{width:100%;height:auto;padding:10px 0;margin:0 auto}@media (min-width:768px){.mainHeader{width:auto;padding:0;margin:0;flex-grow:1}}@media (min-width:992px){.mainHeader{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:31.333333%}}.mainHeader_logo{display:block;color:#2e353b;font-size:28px;font-weight:600;line-height:normal;text-decoration:none}.mainHeader_logo .mainHeader_logoPeriod{color:#ff486e;margin-right:2px}@media (min-width:768px){.mainHeader_logo{display:inline-block}}.siteNav{position:fixed;bottom:0;right:0;width:100%;height:55px;padding:0;margin:0 auto;border-top:1px solid #bfbfbf;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:768px){.siteNav{position:static;width:auto;border:none;flex-grow:1}.siteBanner{margin-top:65px}}.siteBanner,.siteNav_link{position:relative}@media (min-width:992px){.siteNav{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:37.333333%}}.siteNav_link{width:25%;height:100%;text-decoration:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:992px){.siteNav_link{width:auto;margin-right:40px}.siteNav_link:last-child{margin-right:0}.socialHeader_flexItem{margin-right:30px}.socialHeader_flexItem:last-child{margin-right:0}}.siteNav_linkIcon{width:25px;height:25px;fill:#2e353b;margin-bottom:3px}.siteNav_linkText{display:block;color:#2e353b;font-size:.95rem}.siteNav_link--active .siteNav_linkText{color:#ff486e}.siteNav_link--active .siteNav_linkIcon{fill:#ff486e}.socialHeader_link{display:block;width:28px;height:28px}.socialHeader_linkIcon{width:100%;height:100%;fill:#2e353b}.siteBanner .container{height:100%;padding:12px}.siteBanner--small{width:100%;height:400px}@media (min-width:400px){.siteBanner--small{height:550px}}@media (min-width:600px){.siteBanner--small{height:650px}}@media (min-width:768px){.siteBanner--small{height:400px}}@media (min-width:1230px){.siteBanner--small{height:550px}}.siteBanner_title{font-size:2em}@media screen and (min-width:400px){.siteBanner_title{font-size:2.25em}}@media screen and (min-width:768px){.siteBanner_title{font-size:2.5em}}@media screen and (min-width:992px){.siteBanner_title{font-size:2.75em}}.siteBanner_breadcrumbs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.siteBanner_breadcrumbsItem{font-size:16.8px;text-transform:capitalize}.siteBanner_breadcrumbsItem::after{content:'/';color:#ff486e;margin:0 5px}.siteBanner_breadcrumbsItem:last-child::after{display:none}.siteBanner_breadcrumbsItem--active{display:block;color:#2e353b}.siteBlogPost{background:#fff}.siteBlogPost_content{padding:30px 60px;margin:0 auto}
  </style>";?>

  <!--================ - HEAD - ================-->
  <?php include_once($path."head.php"); ?>

  <body>

    <!--================ - NAV - ================-->
    <?php include_once($path."nav.php"); ?>


    <!-- ******************** SITE BANNER : Start ********************-->
    <section class="siteBanner  siteBanner--noImg">
      <!-- BEGIN : CONTAINER -->
      <div class="container">
        <!-- BEGIN : GRID GUIDES -->
        <div class="gridGuides">
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
          <div class="gridGuide"></div>
        </div>
        <!-- END : GRID GUIDES /-->
        <!-- BEGIN : SITE BANNER FLEX -->
        <div class="siteBanner_flex  siteBanner_flex--blog">
          <div class="siteBanner_content">
            <h1 class="siteBanner_title">The digital industry: <br> A developers perspective</h1>

            <!--================ - BREADCRUMBS - ================-->
            <?php include_once($path."breadcrumbs.php"); ?>
          </div>
        </div>
        <!-- END : SITE BANNER FLEX -->
      </div>
      <!-- END : CONTAINER -->
    </section>
    <!-- ******************** SITE BANNER : End ******************** /-->


    <!-- ******************** SITE BLOG POST : Start ******************** -->
    <main class="siteBlogPost" role="main">
      <div class="container">
        <article class="siteBlogPost_content">
          <div class="siteBlogPost_details">
            <span class="siteBlogPost_date">Posted on <b>12/10/16</b></span>
            <span class="siteBlogPost_category">Category: <b>Digital industry</b></span>
          </div>

          <h2>The digital surge</h2>

          <p>
            The UK digital industry is booming and has grown in stature. Digital tech industries have become a key contributor to the UK's economy, growing faster in turnover, GVA and productivity than the rest of the economy. The current demand for certain roles in the industry has grown largely over the years, meaning there are more job opportunities available to us.
          </p>
 
          <p>
            But why is there such a high demand for these certain roles I hear you ask? Well after digging through the Manchester Digital ‘Skills Summit' 2016 slide deck and the 2016 Tech Nation report, I uncovered some interesting pieces of information that shed some light on the subject.
          </p>

          <h3>The industry as a whole</h3>

          <p>
            Before we delve deep into this we first need to understand the industry as whole. In the last 12 months the digital industry has seen a whopping 84% in growth with 1.56 million jobs existing within the digital tech economy. According to the Tech Nation report, the digital economy grew 32% faster than the rest of the economy between 2010 and 2014, with the digital economy turning over a staggering &pound;161 billion in 2014. The digital industry also adds &pound;87 billion to the economy, showcasing its importance to the UK economy.
          </p>

          <blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">&quot;There are 1.56m digital tech jobs right across the UK!&quot; <a href="https://twitter.com/gerardgrech">@gerardgrech</a> presenting <a href="https://twitter.com/hashtag/TechNation?src=hash">#TechNation</a> 2016 to <a href="https://twitter.com/hashtag/DigiColLab?src=hash">#DigiColLab</a> <a href="https://t.co/yviRbbemrI">pic.twitter.com/yviRbbemrI</a></p>&mdash; Tech City UK (@TechCityUK) <a href="https://twitter.com/TechCityUK/status/778645629727834112">September 21, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

          <h3>Ok so the industry is doing great, so what is in such high demand?
</h3>

          <p>
            Now that we live in a digital world, you probably thought it would be easy for a digital business to hire good developers, right? Well, no not really. In the North West 65% of digital businesses found the Developer role to be the most difficult role to fill, which is a concern for anybody when you consider that 25% of digital businesses say that development is the most significant function within their business.
          </p>

          <h3>But surely there are plenty of skilled coders in the UK, right?
</h3>

          <p>
            Well yes there are but it isn't just about being able to code, I believe we now live in a world where developers must be able to communicate effectively and work well within teams. An interesting article from
            <a class="externalLink" href="http://www.computing.co.uk/ctg/news/2347538/we-want-to-hire-developers-but-were-struggling-to-find-really-talented-ones-thetrainlinecom-cto" title="External link to computing.co.uk article.">
              <span class="externalLink_text">article from computing.co.uk</span>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </a>
            discusses how Thetrainline.com found hiring developers a difficult task as many applicants lacked the soft skills, like communication, required and that the company would rather hire a developer who had better soft skills than a developer who had better coding skills.
          </p>

          <figure class="siteFigure">
            <img class="siteFigure_img" src="/images/blog/md-role-slide.jpg" alt="Pie chart showing three most difficult roles to fill" />
            <figcaption class="siteFigure_caption">Developer most difficult role to fill - Manchester Digital slide deck</figcaption>
          </figure>

          <h3>Outsourcing work is outrageous, but there's a reason for it</h3>

          <p>
            When I read how many digital businesses in the UK outsourced their work, I cried in my bowl of cornflakes. Ok, I didn't cry really and I wasn't eating cornflakes at the time, but it did open my eyes a bit. According to the Manchester Digital 2016 slide deck, 38% of businesses outsourced development work locally or used contract workers.
          </p>

          <p>
            While outsourcing isn't necessarily a disaster, I feel this shows that businesses can't fill their roles quick enough and are having no choice but to outsource. Oh, and which type of role is the biggest outsourced? Yep you've guessed it, the development role. About 38% of work that is outsourced is development work, which ties in with how businesses are struggling to fill development roles.
          </p>

          <h3>It's not all doom and gloom</h3>

          <p>
            Ok, so I've been quite negative in this post talking about how businesses are struggling to hire good developers, but all this high demand stuff is also a good thing. The digital industry is growing rapidly in the UK which means there are plenty of opportunities available. We as developers need to make sure we keep on top of our soft skills just as much as our technical skills. One great way of doing both of these things is attending meetups and conferences which enable us to meet people from the digital community and to socialise and share with each other.
          </p>

          <p>
            We are privileged to be in an industry so tightly knitted together with people willing to share with others that there are plenty of conferences and meetups to attend. Sticking close to home there is <a class="externalLink" href="http://www.meetup.com/McrFRED/" title="External link to Manchester Fred meet up page.">
              <span class="externalLink_text">McrFRED</span>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </a>
            for example, which is a monthly meetup in Manchester for front-end developers, organised by
            <a class="externalLink" href="https://s10wen.com/" title="External link to Simon Owen's website.">
              <span class="externalLink_text">Simon Owen</span>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </a>,
            who is well-known in the industry.
            <a class="externalLink" href="https://twitter.com/upfrontconf?lang=en-gb" title="External link to Up Front Conf twitter page.">
              <span class="externalLink_text">Up Front Conf</span>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </a>
            is a Manchester based conference, open to anyone involved in the web with Simon, again, one of the organisers.
          </p>

          <p>
            One meet up that I regularly attend, and highly recommend, is McrFRED. It is free to attend and a great place to meet fellow developers in Manchester, to learn and share ideas with each other. Plus, you get free goodies like beer, soft drink and the occasional t-shirt, so you'd be silly to turn down an opportunity to get your hands on some free stuff. I shall provide a list of great meets ups and conferences to attend at the end of this post.
          </p>

          <h3>Finishing off</h3>

          <p>
            All in all, the digital industry is going through an exciting phase with plenty of opportunities open to us. It is clear that soft skills are a big requirement in the industry, which is something you can only really teach yourself, but if you can achieve that and keep updated on your technical skills, then it will set you in good stead to work in such a great industry.
          </p>

          <h3>Recommended conferences/meet ups</h3>

          <h4>Conferences</h4>

          <ul class="siteList">
            <li class="siteList_item">
              <svg class="siteList_icon">
                <use xlink:href="/images/icons/sprite.svg#check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
              <a class="siteList_link" href="#">NUX (Northern User Experience)</a>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </li>
            <li class="siteList_item">
              <svg class="siteList_icon">
                <use xlink:href="/images/icons/sprite.svg#check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
              <a class="siteList_link" href="#">Up Front Conf</a>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </li>
            <li class="siteList_item">
              <svg class="siteList_icon">
                <use xlink:href="/images/icons/sprite.svg#check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
              <a class="siteList_link" href="#">Front End North</a>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </li>
            <li class="siteList_item">
              <svg class="siteList_icon">
                <use xlink:href="/images/icons/sprite.svg#check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
              <a class="siteList_link" href="#">Manchester Talent Day</a>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </li>
            <li class="siteList_item">
              <svg class="siteList_icon">
                <use xlink:href="/images/icons/sprite.svg#check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
              <a class="siteList_link" href="#">Camp Digital</a>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </li>
          </ul>

          <h4>Meet ups</h4>

          <ul class="siteList">
            <li class="siteList_item">
              <svg class="siteList_icon">
                <use xlink:href="/images/icons/sprite.svg#check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
              <a class="siteList_link" href="#">McrFRED</a>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </li>
            <li class="siteList_item">
              <svg class="siteList_icon">
                <use xlink:href="/images/icons/sprite.svg#check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
              <a class="siteList_link" href="#">Code In The Dark</a>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </li>
            <li class="siteList_item">
              <svg class="siteList_icon">
                <use xlink:href="/images/icons/sprite.svg#check" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
              <a class="siteList_link" href="#">McrUXD</a>
              <svg class="externalLink_icon">
                <use xlink:href="/images/icons/sprite.svg#external-link" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </li>
          </ul>

        </article>
      </div>
    </main>
    <!-- ******************** SITE BLOG POST : End ******************** /-->


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
