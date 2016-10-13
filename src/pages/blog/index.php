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
  <?php $page_title = "Blog | Alex Clapperton";?>

  <!-- CRITICAL CSS - ABOVE THE FOLD -->
  <?php $critical_path = "<style type='text/css'>
    .gridGuide,.gridGuides{position:absolute;height:100%}h1,h3{margin:0 0 12px;line-height:1.5}.btn_scrollTop,.siteNav_linkText,.skipLink,.skipLinks{text-align:center}.siteBanner_breadcrumbs,.siteNav,.siteNav_link{-webkit-box-direction:normal}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}.mainHeader_logo,h1,h3{font-family:Dosis,sans-serif;font-weight:600}@media (min-width:600px){body{padding-bottom:0}}h1{color:#ff486e;font-size:2em}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}h3{color:#2e353b;font-size:1.3em}.skipLink,a{color:#ff486e}@media screen and (min-width:400px){h3{font-size:1.45em}}@media screen and (min-width:768px){h3{font-size:1.7em}}img{max-width:100%;margin:0 auto;vertical-align:middle}a{text-decoration:underline}.container{position:relative;padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.skipLinks{position:absolute;top:10px;left:0;width:100%;z-index:100}.skipLink{position:absolute;top:40%;left:10%;margin:0;font-size:14.7px;font-weight:600}.skipLink--hidden{border:0;width:130px;height:.0625rem;overflow:hidden;padding:0;position:absolute}.btn_scrollTop{display:block;position:fixed;right:-60px;bottom:20px;width:40px;height:40px;background:#ff486e;border-radius:50%;z-index:20;opacity:0;box-shadow:3px 4px 9px 0 rgba(0,0,0,.15)}.siteHeader,.siteNav{background:#fff;z-index:30}.btn_scrollIcon{width:50%;height:100%;fill:#fff}.siteHeader{position:relative;width:100%}@media (min-width:768px){.siteHeader{position:fixed;top:0;left:0;padding:5px 0}}.mainHeader{width:100%;height:auto;padding:10px 0;margin:0 auto}@media (min-width:768px){.mainHeader{width:auto;padding:0;margin:0;flex-grow:1}}@media (min-width:992px){.mainHeader{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:31.333333%}}.mainHeader_logo{display:block;color:#2e353b;font-size:28px;line-height:normal;text-decoration:none}.mainHeader_logo .mainHeader_logoPeriod{color:#ff486e;margin-right:2px}@media (min-width:768px){.mainHeader_logo{display:inline-block}}.siteNav{position:fixed;bottom:0;right:0;width:100%;height:55px;padding:0;margin:0 auto;border-top:1px solid #bfbfbf;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:768px){.siteNav{position:static;width:auto;border:none;flex-grow:1}.siteBanner{margin-top:65px}}.siteBanner,.siteBlog,.siteNav_link{position:relative}@media (min-width:992px){.siteNav{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:37.333333%}}.siteNav_link{width:25%;height:100%;text-decoration:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:992px){.siteNav_link{width:auto;margin-right:40px}.siteNav_link:last-child{margin-right:0}.socialHeader_flexItem{margin-right:30px}.socialHeader_flexItem:last-child{margin-right:0}}.siteNav_linkIcon{width:25px;height:25px;fill:#2e353b;margin-bottom:3px}.siteNav_linkText{display:block;color:#2e353b;font-size:.95rem}.siteNav_link--active .siteNav_linkText{color:#ff486e}.siteNav_link--active .siteNav_linkIcon{fill:#ff486e}.socialHeader_link{display:block;width:28px;height:28px}.socialHeader_linkIcon{width:100%;height:100%;fill:#2e353b}.siteBanner .container{height:100%;padding:12px}.siteBanner_blog .container{background:url(/images/banner/wordpress-frame.png) bottom no-repeat;background-size:calc(100% - 24px)}@media (min-width:768px){.siteBanner_blog .container{background-position:calc(100% - 12px) bottom;background-size:calc(50% - 24px)}}.siteBlog--white,.siteBlog_item{background:#fff}.siteBanner--small{width:100%;height:400px}@media (min-width:400px){.siteBanner--small{height:550px}}@media (min-width:600px){.siteBanner--small{height:650px}}@media (min-width:768px){.siteBanner--small{height:400px}}@media (min-width:1230px){.siteBanner--small{height:550px}}.siteBanner_Title{font-size:2em}@media screen and (min-width:400px){.siteBanner_Title{font-size:2.25em}}@media screen and (min-width:768px){.siteBanner_Title{font-size:2.5em}}@media screen and (min-width:992px){.siteBanner_Title{font-size:2.75em}}.siteBanner_breadcrumbs{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.siteBanner_breadcrumbsItem{font-size:16.8px;text-transform:capitalize}.siteBanner_breadcrumbsItem::after{content:'/';color:#ff486e;margin:0 5px}.siteBanner_breadcrumbsItem:last-child::after{display:none}.siteBanner_breadcrumbsItem--active{display:block;color:#2e353b}.siteBlog .container{height:100%;padding:30px 12px}@media (min-width:768px){.siteBlog .container{padding:30px 0}.siteBlog_item{width:calc(50% - 12px)}}.siteBlog_item{display:block;text-decoration:none;padding:15px;margin-top:30px;border-bottom:2px solid #ff486e}.siteBlog_item:first-child{margin-top:0}@media (min-width:992px){.siteBlog_item{position:relative;border-bottom:none}.siteBlog_item::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:#ff486e}}.siteBlog_itemTitle{color:#ff486e}.siteBlog_itemDate{display:block;color:#2e353b;font-weight:600;margin-bottom:10px}
  </style>";?>

  <!--================ - HEAD - ================-->
  <?php include_once($path."head.php"); ?>

  <body>

    <!--================ - NAV - ================-->
    <?php include_once($path."nav.php"); ?>


    <!-- ******************** SITE BANNER : Start ********************-->
    <section class="siteBanner  siteBanner--small  siteBanner_blog">
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
        <div class="siteBanner_flex">
          <h1 class="siteBanner_Title">Check out <br> my latest posts</h1>

          <!--================ - BREADCRUMBS - ================-->
          <?php include_once($path."breadcrumbs.php"); ?>

        </div>
        <!-- END : SITE BANNER FLEX -->
      </div>
      <!-- END : CONTAINER -->
    </section>
    <!-- ******************** SITE BANNER : End ******************** /-->


    <!-- ******************** SITE BLOG : Start ******************** /-->
    <main class="siteBlog  siteBlog--white" role="main">
      <!-- BEGIN : CONTAINER -->
      <div class="container">
        <!-- BEGIN : SITE BLOG FLEX -->
        <div class="siteBlog_flex">
          <!-- BEGIN : SITE BLOG ITEM -->
          <a class="siteBlog_item" href="/blog/the-digital-industry-a-developers-perspective.php" title="Internal link to The Digital Industry: A Developer's Perspective blog post.">
            <h3 class="siteBlog_itemTitle">The Digital Industry: A Developer's Perspective</h3>
            <span class="siteBlog_itemDate">Sept 30, 2016</span>
            <p>
               Digital tech industries have become a key contributor to the UK’s economy, growing faster in turnover, GVA and productivity than the rest of the economy.
            </p>
            <span class="btnLink_noPadding  btnLink_noPadding--pink  btnLink_flex">
              <span class="btnLink_text">Read Post</span>
              <svg class="btnLink_icon  btnLink_icon--pink">
                <title>Arrow pointing right</title>
                <use xlink:href="/images/icons/sprite.svg#arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </span>
          </a>
          <!-- END : SITE BLOG ITEM /-->
          <!-- BEGIN : SITE BLOG ITEM -->
          <a class="siteBlog_item" href="#">
            <h3 class="siteBlog_itemTitle">There on the Lake Missouri</h3>
            <span class="siteBlog_itemDate">Sept 30, 2016</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Int get commodo tristique odio, qui is aliquet ut.
            </p>
            <span class="btnLink_noPadding  btnLink_noPadding--pink  btnLink_flex" href="#">
              <span class="btnLink_text">Read Post</span>
              <svg class="btnLink_icon  btnLink_icon--pink">
                <title>Arrow pointing right</title>
                <use xlink:href="/images/icons/sprite.svg#arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </span>
          </a>
          <!-- END : SITE BLOG ITEM /-->
          <!-- BEGIN : SITE BLOG ITEM -->
          <a class="siteBlog_item" href="#">
            <h3 class="siteBlog_itemTitle">There on the Lake Missouri</h3>
            <span class="siteBlog_itemDate">Sept 30, 2016</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Int get commodo tristique odio, qui is aliquet ut.
            </p>
            <span class="btnLink_noPadding  btnLink_noPadding--pink  btnLink_flex" href="#">
              <span class="btnLink_text">Read Post</span>
              <svg class="btnLink_icon  btnLink_icon--pink">
                <title>Arrow pointing right</title>
                <use xlink:href="/images/icons/sprite.svg#arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </span>
          </a>
          <!-- END : SITE BLOG ITEM /-->
          <!-- BEGIN : SITE BLOG ITEM -->
          <a class="siteBlog_item" href="#">
            <h3 class="siteBlog_itemTitle">There on the Lake Missouri</h3>
            <span class="siteBlog_itemDate">Sept 30, 2016</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Int get commodo tristique odio, qui is aliquet ut.
            </p>
            <span class="btnLink_noPadding  btnLink_noPadding--pink  btnLink_flex" href="#">
              <span class="btnLink_text">Read Post</span>
              <svg class="btnLink_icon  btnLink_icon--pink">
                <title>Arrow pointing right</title>
                <use xlink:href="/images/icons/sprite.svg#arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
              </svg>
            </span>
          </a>
          <!-- END : SITE BLOG ITEM /-->
        </div>
        <!-- END : SITE BLOG FLEX /-->
      </div>
      <!-- END : CONTAINER /-->
    </main>
    <!-- ******************** SITE BLOG : End /******************** /-->


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
