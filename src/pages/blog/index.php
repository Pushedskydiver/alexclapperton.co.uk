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

  <!-- CRITICAL CSS -->
  <?php $critical_path = "<style>
.gridGuide,.gridGuides{position:absolute;height:100%}h3,p{color:#2e353b}a,h1,h2{color:#ff486e}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}h1,h2,h3{font-family:Dosis,sans-serif;font-weight:600;margin:0 0 12px;line-height:1.5}@media (min-width:600px){body{padding-bottom:0}}h1{font-size:2em}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}h2{font-size:1.5em}@media screen and (min-width:400px){h2{font-size:1.75em}}@media screen and (min-width:768px){h2{font-size:2em}}@media screen and (min-width:992px){h2{font-size:2.15em}}h3{font-size:1.3em}@media screen and (min-width:400px){h3{font-size:1.45em}}@media screen and (min-width:768px){h3{font-size:1.7em}}p{font-size:1em;font-weight:400;line-height:1.7;margin:0 0 15px}@media screen and (min-width:400px){p{font-size:1.07143em}}@media screen and (min-width:600px){p{font-size:1.10714em}}@media screen and (min-width:768px){p{font-size:1.14286em}}@media screen and (min-width:992px){p{font-size:1.17857em}}@media screen and (min-width:1230px){p{font-size:1.19643em}}img{max-width:100%;margin:0 auto;vertical-align:middle}a{text-decoration:underline}.container{position:relative;padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.twitter-tweet{margin:24px 0!important}.siteBanner{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.siteBanner .container{height:100%;padding:12px}.siteBanner--small{width:100%;height:400px}@media (min-width:400px){.siteBanner--small{height:550px}}@media (min-width:600px){.siteBanner--small{height:650px}}@media (min-width:768px){.siteBanner{margin-top:65px}.siteBanner--small{height:400px}}@media (min-width:1230px){.siteBanner--small{height:550px}}.siteBanner_Title{font-size:2em}@media screen and (min-width:400px){.siteBanner_Title{font-size:2.25em}}@media screen and (min-width:768px){.siteBanner_Title{font-size:2.5em}}@media screen and (min-width:992px){.siteBanner_Title{font-size:2.75em}}.siteBlogPost{overflow:hidden}.siteBlogPost_content{background:#fff;padding:30px 15px}@media (min-width:768px){.siteBanner_flex{position:relative;height:100%;z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.siteBlogPost_flex{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.siteBlogPost_content{position:relative;width:calc(75% - 6px);padding-right:20px;padding-left:20px}.siteBlogPost_content::before{content:'';position:absolute;top:0;left:calc(-100% - 24px);width:100%;height:100%;background:#fff}}@media (min-width:992px){.siteBlogPost_content{padding-right:30px;padding-left:30px}}.siteBlogPost_img{width:100%;margin-bottom:12px}.siteBlogPost_details{font-size:1em}@media screen and (min-width:400px){.siteBlogPost_details{font-size:1.07143em}}@media screen and (min-width:600px){.siteBlogPost_details{font-size:1.10714em}}@media screen and (min-width:768px){.siteBlogPost_details{font-size:1.14286em}}@media screen and (min-width:992px){.siteBlogPost_details{font-size:1.17857em}}@media screen and (min-width:1230px){.siteBlogPost_details{font-size:1.19643em}}@media (min-width:768px){.siteBlogPost_details{margin-bottom:24px}}.siteBlogPost_date{display:block;margin-bottom:12px}@media (min-width:768px){.siteBlogPost_date{display:inline-block;margin-right:24px;margin-bottom:0}}.siteBlogPost_category{display:block;margin-bottom:12px}@media (min-width:768px){.siteBlogPost_category{display:inline-block;margin-bottom:0}}
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
    <section class="siteBlog  siteBlog--white">
      <!-- BEGIN : CONTAINER -->
      <div class="container">
        <!-- BEGIN : SITE BLOG FLEX -->
        <div class="siteBlog_flex">
          <!-- BEGIN : SITE BLOG ITEM -->
          <div class="siteBlog_item">
            <!-- BEGIN : SITE BLOG ITEM DESCRIPTION -->
            <div class="siteBlog_itemDesc">
              <h3 class="siteBlog_itemTitle">There on the Lake Missouri</h3>
              <span class="siteBlog_itemDate">Sept 30, 2016</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Int get commodo tristique odio, qui is aliquet ut.
              </p>
              <a class="btnLink_noPadding  btnLink_noPadding--pink  btnLink_flex" href="#">
                <span class="btnLink_text">Read Post</span>
                <svg class="btnLink_icon  btnLink_icon--pink">
                  <title>Arrow pointing right</title>
                  <use xlink:href="/images/icons/sprite.svg#arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                </svg>
              </a>
            </div>
            <!-- END : SITE BLOG ITEM DESCRIPTION /-->
          </div>
          <!-- END : SITE BLOG ITEM /-->
          <!-- BEGIN : SITE BLOG ITEM -->
          <div class="siteBlog_item">
            <!-- BEGIN : SITE BLOG ITEM DESCRIPTION -->
            <div class="siteBlog_itemDesc">
              <h3 class="siteBlog_itemTitle">There on the Lake Missouri</h3>
              <span class="siteBlog_itemDate">Sept 30, 2016</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Int get commodo tristique odio, qui is aliquet ut.
              </p>
              <a class="btnLink_noPadding  btnLink_noPadding--pink  btnLink_flex" href="#">
                <span class="btnLink_text">Read Post</span>
                <svg class="btnLink_icon  btnLink_icon--pink">
                  <title>Arrow pointing right</title>
                  <use xlink:href="/images/icons/sprite.svg#arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                </svg>
              </a>
            </div>
            <!-- END : SITE BLOG ITEM DESCRIPTION /-->
          </div>
          <!-- END : SITE BLOG ITEM /-->
          <!-- BEGIN : SITE BLOG ITEM -->
          <div class="siteBlog_item">
            <!-- BEGIN : SITE BLOG ITEM DESCRIPTION -->
            <div class="siteBlog_itemDesc">
              <h3 class="siteBlog_itemTitle">There on the Lake Missouri</h3>
              <span class="siteBlog_itemDate">Sept 30, 2016</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Int get commodo tristique odio, qui is aliquet ut.
              </p>
              <a class="btnLink_noPadding  btnLink_noPadding--pink  btnLink_flex" href="#">
                <span class="btnLink_text">Read Post</span>
                <svg class="btnLink_icon  btnLink_icon--pink">
                  <title>Arrow pointing right</title>
                  <use xlink:href="/images/icons/sprite.svg#arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                </svg>
              </a>
            </div>
            <!-- END : SITE BLOG ITEM DESCRIPTION /-->
          </div>
          <!-- END : SITE BLOG ITEM /-->
          <!-- BEGIN : SITE BLOG ITEM -->
          <div class="siteBlog_item">
            <!-- BEGIN : SITE BLOG ITEM DESCRIPTION -->
            <div class="siteBlog_itemDesc">
              <h3 class="siteBlog_itemTitle">There on the Lake Missouri</h3>
              <span class="siteBlog_itemDate">Sept 30, 2016</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Int get commodo tristique odio, qui is aliquet ut.
              </p>
              <a class="btnLink_noPadding  btnLink_noPadding--pink  btnLink_flex" href="#">
                <span class="btnLink_text">Read Post</span>
                <svg class="btnLink_icon  btnLink_icon--pink">
                  <title>Arrow pointing right</title>
                  <use xlink:href="/images/icons/sprite.svg#arrow-right" xmlns:xlink="http://www.w3.org/1999/xlink"></use>
                </svg>
              </a>
            </div>
            <!-- END : SITE BLOG ITEM DESCRIPTION /-->
          </div>
          <!-- END : SITE BLOG ITEM /-->
        </div>
        <!-- END : SITE BLOG FLEX /-->
      </div>
      <!-- END : CONTAINER /-->
    </section>
    <!-- ******************** SITE BLOG : End /******************** /-->


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
