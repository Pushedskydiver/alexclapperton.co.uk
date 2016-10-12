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

  <!-- CRITICAL CSS -->
  <?php $critical_path = "<style>
.gridGuide,.gridGuides{position:absolute;height:100%}.btnLink_noPadding,.btnLink_text{text-decoration:none}.btnLink_noPadding--pink,h1{color:#ff486e}.btnLink_icon,img{vertical-align:middle}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}.container,.siteBanner,.siteBlog,.siteBlog_item{position:relative}.btnLink_noPadding{display:inline-block;font-size:16.1px;font-weight:600}h3,p{color:#2e353b}.btnLink_flex{-ms-flex-item-align:start;align-self:flex-start}.btnLink_icon{width:19px;height:19px}.btnLink_icon--pink{fill:#ff486e}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}h1,h3{font-family:Dosis,sans-serif;font-weight:600;margin:0 0 12px;line-height:1.5}@media (min-width:600px){body{padding-bottom:0}}h1{font-size:2em}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}h3{font-size:1.3em}@media screen and (min-width:400px){h3{font-size:1.45em}}@media screen and (min-width:768px){h3{font-size:1.7em}}p{font-size:1em;font-weight:400;line-height:1.7;margin:0 0 15px}.siteBlog_itemTitle,a{color:#ff486e}@media screen and (min-width:400px){p{font-size:1.07143em}}@media screen and (min-width:600px){p{font-size:1.10714em}}@media screen and (min-width:768px){p{font-size:1.14286em}}@media screen and (min-width:992px){p{font-size:1.17857em}}@media screen and (min-width:1230px){p{font-size:1.19643em}}img{max-width:100%;margin:0 auto}a{text-decoration:underline}.container{padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}.siteBanner{margin-top:65px}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.siteBanner{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.siteBanner .container{height:100%;padding:12px}.siteBanner_blog .container{background:url(/images/banner/wordpress-frame.png) bottom no-repeat;background-size:calc(100% - 24px)}.siteBanner--small{width:100%;height:400px}@media (min-width:400px){.siteBanner--small{height:550px}}@media (min-width:600px){.siteBanner--small{height:650px}}@media (min-width:768px){.siteBanner_blog .container{background-position:calc(100% - 12px) bottom;background-size:calc(50% - 24px)}.siteBanner--small{height:400px}}@media (min-width:1230px){.siteBanner--small{height:550px}}.siteBanner_Title{font-size:2em}@media screen and (min-width:400px){.siteBanner_Title{font-size:2.25em}}@media screen and (min-width:768px){.siteBanner_Title{font-size:2.5em}}@media screen and (min-width:992px){.siteBanner_Title{font-size:2.75em}}.siteBlog .container{height:100%;padding:30px 12px}.siteBlog--white{background:#fff}.siteBlog_item{margin-bottom:30px}@media (min-width:768px){.siteBanner_flex{position:relative;height:100%;z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.siteBlog .container{padding:30px 0}.siteBlog_flex{padding:0 12px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.siteBlog_item{width:48%;margin-bottom:48px}}.siteBlog_itemImgLink{display:block}@media (min-width:992px){.siteBlog_item{width:32%}.siteBlog_itemImgLink{overflow:hidden}}.siteBlog_itemImg{width:100%}.siteBlog_itemDesc{background:0 0;padding:15px 0;border-bottom:2px solid #ff486e}.siteBlog_itemDate{display:block;position:absolute;top:12px;right:12px;background:#ff486e;color:#fff;padding:6px 12px;margin-bottom:10px}
</style>";?>

  <!--================ - HEAD - ================-->
  <?php include_once($path."head.php"); ?>

  <body>

    <!--================ - NAV - ================-->
    <?php include_once($path."nav.php"); ?>


    <!-- ******************** SITE BANNER : Start ********************-->
    <section class="siteBanner  siteBanner--small ">
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
          <h1 class="siteBanner_Title">The digital industry: <br> A developers perspective</h1>

          <!--================ - BREADCRUMBS - ================-->
          <?php include_once($path."breadcrumbs.php"); ?>

        </div>
        <!-- END : SITE BANNER FLEX -->
      </div>
      <!-- END : CONTAINER -->
    </section>
    <!-- ******************** SITE BANNER : End ******************** /-->


    <!-- ******************** SITE BLOG POST : Start ******************** -->
    <section class="siteBlogPost">
      <div class="container">
        <div class="siteBlogPost_flex">
          <div class="siteBlogPost_content">
            <img class="siteBlogPost_img" src="/images/blog/blog.jpg" alt="" />

            <div class="siteBlogPost_details">
              <span class="siteBlogPost_date">Posted on <b>12/10/16</b></span>
              <span class="siteBlogPost_category">Category: <b>Industry</b></span>
            </div>

            <h2>The digital surge</h2>

            <p>
              The UK digital industry is booming and is growing at such a pace that it's growing faster than I can count. The current demand for certain roles in the industry is so high that businesses are literally pulling off their wigs and chucking them out of the window. It is undoubtedly an industry to be involved in.
            </p>
 
            <p>
              Whilst digging through the Manchester Digital 'Skills Summit' 2016 slide deck and the 2016 Tech Nation report, I uncovered some interesting things that gave me a wider insight into how the developer role is in such high demand and the reason why that is.
            </p>

            <h3>The industry as a whole</h3>

            <p>
              As I said before the digital industry is booming. In the last 12 months the digital industry has seen a whopping 84% in growth with 1.56 million jobs existing within the digital tech economy. According to the Tech Nation report, the digital economy grew 32% faster than the rest of the economy between 2010 and 2014, with the digital economy turning over a staggering £161 billion in 2014. The digital industry also adds £87 billion to the economy, and people thought technology was a bad thing. #digirevolution.
            </p>

            <blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">&quot;There are 1.56m digital tech jobs right across the UK!&quot; <a href="https://twitter.com/gerardgrech">@gerardgrech</a> presenting <a href="https://twitter.com/hashtag/TechNation?src=hash">#TechNation</a> 2016 to <a href="https://twitter.com/hashtag/DigiColLab?src=hash">#DigiColLab</a> <a href="https://t.co/yviRbbemrI">pic.twitter.com/yviRbbemrI</a></p>&mdash; Tech City UK (@TechCityUK) <a href="https://twitter.com/TechCityUK/status/778645629727834112">September 21, 2016</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

            <h3>Raiders of the lost developer</h3>

            <p>
              Now that we live in a digital world, you probably thought it would be easy for a digital business to hire good developers, right? Well, no not really. In the North West 65% of digital businesses found the Developer role to be the most difficult role to fill, which is a concern for anybody when you consider that 25% of digital businesses say that development is the most significant function within their business.
            </p>

            <h3>But surely there are plenty of skilled coders in the UK, right?</h3>

            <p>
              Well yes there are but it isn't just about being able to code, you must also be a good communicator, a key soft skill. An interesting <a href="http://www.computing.co.uk/ctg/news/2347538/we-want-to-hire-developers-but-were-struggling-to-find-really-talented-ones-thetrainlinecom-cto" title="External link to computing.co.uk article.">article from computing.co.uk</a> discusses how Thetrainline.com found hiring developers a difficult task as many applicants lacked the soft skills required and that the company would rather hire a developer who had better soft skills than a developer who had better coding skills.
            </p>

            <figure class="siteFigure">
              <img class="siteFigure_img" src="/images/blog/md-role-slide.jpg" alt="Pie chart showing three most difficult roles to fill" />
              <figcaption class="siteFigure_caption">Developer most difficult role to fill - Manchester Digital slide deck</figcaption>
            </figure>

            <h3>Outsourcing work is outrageous, but there's a reason for it</h3>

            <p>
              When I read how many digital businesses in the UK outsourced their work, I cried in my bowl of cornflakes. Ok, I didn't cry really and I wasn't eating cornflakes at the time, but it did open my eyes a bit. According to the Manchester Digital 2016 slide deck, 38% of businesses outsourced development work locally or used contract workers. While outsourcing isn't necessarily a disaster, I feel this shows that businesses can't fill their roles quick enough and are having no choice but to outsource. Oh, and which type of role is the biggest outsourced? Yep you've guessed it, the development role. About 38% of work that is outsourced is development work, which ties in with how businesses are struggling to fill development roles.
            </p>

            <h3>It's not all doom and gloom</h3>

            <p>
              Ok, so I've been quite negative in this post talking about how businesses are struggling to hire good developers, which in turn pushes them to outsource work, but it's not all that bad. The digital industry is growing rapidly in the UK which means there are plenty of jobs available. We as developers need to make sure we keep on top of our soft skills as well as our technical skills. One great way of doing both of these things is attending meetups and conferences which enable people from the digital community to come together and socialise and share with each other.
            </p>

            <p>
              We are privileged to be in an industry so tightly knitted together, where we are willing to share with others that there are plenty of conferences and meetups to attend. Sticking close to home there is <a href="http://www.meetup.com/McrFRED/" title="External link to Manchester Fred's meetup page.">McrFRED</a> (pronounced Manchester Fred) is a monthly meetup in Manchester for front-end developers, organised by <a href="https://s10wen.com" title="External link to Simon Owen's website.">Simon Owen</a>, who is well known in the industry. <a href="https://twitter.com/upfrontconf?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="External link to Up Front Conf Twitter profile.">Up Front Conf</a> is a Manchester based conference, open to anyone involved in the web with Simon, again, one of the organisers. I could go on all day but you'll eventually get bored so I'll provide a list of popular meetups and conferences at the bottom of this post.
            </p>

            <h3>Finishing off</h3>

            <p>
              All in all, the digital industry is going through an exciting phase and there are plenty of opportunities open to us. It is clear that soft skills are a big requirement in the industry, which is something you can only really teach yourself, but if you can achieve that and keep updated on your technical skills, then it will set you in good stead when looking to work in such a great industry.
            </p>

          </div>

          <div class="siteBlogPost_sideBar"></div>
        </div>
      </div>
    </section>
    <!-- ******************** SITE BLOG POST : End ******************** /-->


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
