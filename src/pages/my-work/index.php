<?php
  $path = $_SERVER['DOCUMENT_ROOT'];
  $path .= "/includes/";
  $current = 'work';
?>

<!DOCTYPE html>
<html lang="en">

  <!-- META TAGS  -->
  <?php $meta_description = '';?>
  <?php $meta_keywords = '';?>

  <!-- PAGE TITLE -->
  <?php $page_title = "My Work | Alex Clapperton";?>

  <!-- CRITICAL CSS -->
  <?php $critical_path = "<style>
.gridGuide,.gridGuides{position:absolute;height:100%}h1,h3{font-weight:600;margin:0 0 12px;line-height:1.5}a,h1{color:#ff486e}.siteBanner,.sitePortfolio_filter--flex{-webkit-box-orient:vertical;-webkit-box-direction:normal}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.gridGuides{top:0;left:0;width:100%;z-index:-1}@media (min-width:768px){.gridGuides::after,.gridGuides::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15}.gridGuides::before{left:-12px}.gridGuides::after{right:-12px}}.gridGuide{width:100%;min-height:auto;z-index:1}.gridGuide:nth-of-type(1)::after,.gridGuide:nth-of-type(1)::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide:nth-of-type(1)::before{left:12px}.gridGuide:nth-of-type(1)::after{right:12px}@media (min-width:768px){.gridGuide{width:25%}.gridGuide:nth-of-type(1){left:0}.gridGuide:nth-of-type(2){left:25%}.gridGuide:nth-of-type(3){left:50%}.gridGuide:nth-of-type(4){left:75%}.gridGuide::after,.gridGuide::before{content:'';position:absolute;top:0;width:1px;height:100%;background:#2e353b;opacity:.15;z-index:-1}.gridGuide::before{left:12px}.gridGuide::after{right:12px}}*,:after,:before{box-sizing:border-box}html{font-size:16px}body{font-family:Inconsolata,sans-serif;font-size:14px;background:#e5e5e5;padding-bottom:55px;margin:0;-webkit-animation:fadein 2s;animation:fadein 2s}.sitePortfolio_filterBtn,h1,h3{font-family:Dosis,sans-serif}@media (min-width:600px){body{padding-bottom:0}}h1{font-size:2em}@media screen and (min-width:400px){h1{font-size:2.25em}}@media screen and (min-width:768px){h1{font-size:2.5em}}@media screen and (min-width:992px){h1{font-size:2.75em}}h3{color:#2e353b;font-size:1.3em}@media screen and (min-width:400px){h3{font-size:1.45em}}@media screen and (min-width:768px){h3{font-size:1.7em}}figure{padding:0;margin:0}img{max-width:100%;margin:0 auto;vertical-align:middle}button{-webkit-appearance:none;appearance:none;border:none}a{text-decoration:underline}.container{position:relative;padding:0 12px}@media (min-width:768px){.container{width:668px;margin:0 auto}.siteBanner{margin-top:65px}}@media (min-width:992px){.container{width:962px}}@media (min-width:1230px){.container{width:1200px}}.siteBanner{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.siteBanner .container{height:100%;padding:12px}.siteBanner_work .container{background:url(/images/banner/browser-frame.png) bottom no-repeat;background-size:calc(100% - 24px)}.siteBanner--small{width:100%;height:400px}@media (min-width:400px){.siteBanner--small{height:550px}}@media (min-width:600px){.siteBanner--small{height:650px}}@media (min-width:768px){.siteBanner_work .container{background-position:calc(100% - 12px) bottom;background-size:calc(50% - 24px)}.siteBanner--small{height:400px}}@media (min-width:1230px){.siteBanner--small{height:550px}}@media (min-width:768px){.siteBanner--flex{position:relative;height:100%;z-index:10;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.siteBanner_Title{font-size:2em}@media screen and (min-width:400px){.siteBanner_Title{font-size:2.25em}}@media screen and (min-width:768px){.siteBanner_Title{font-size:2.5em}}@media screen and (min-width:992px){.siteBanner_Title{font-size:2.75em}}.sitePortfolio{background:#fff;padding:30px 0}.sitePortfolio_filter{margin-bottom:24px}.sitePortfolio_filter--flex{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.sitePortfolio_filterBtn{background:#ff486e;color:#fff;font-size:15.4px;font-weight:400;letter-spacing:.5px;padding:12px;margin-bottom:10px;text-align:center}.sitePortfolio_filterBtn:last-child{margin-bottom:0}@media (min-width:600px){.sitePortfolio_filter--flex{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;justify-content:flex-start}.sitePortfolio_filterBtn{min-width:150px;padding:12px 15px;margin-right:10px;margin-bottom:0}.sitePortfolio_grid{margin-right:-12px;margin-left:-12px}}@media (min-width:992px){.sitePortfolio_filterBtn{padding:8px 15px}.sitePortfolio_itemDesc{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.sitePortfolio_filterBtn--active{background:#2e353b}.sitePortfolio_item{position:relative;background:#2e353b;margin-top:12px}.sitePortfolio_item:first-child{margin-top:0}@media (min-width:600px){.sitePortfolio_item{width:calc(50% - 24px);margin:12px;overflow:hidden}.sitePortfolio_item:first-child{margin-top:12px}}@media (min-width:1230px){.sitePortfolio_item{width:calc(33.333333% - 24px)}}.sitePortfolio_itemImg{opacity:.8}.sitePortfolio_itemDesc{position:absolute;bottom:0;left:0;width:100%;background:#e5e5e5;padding:12px}.sitePortfolio_itemLink{display:block;position:relative;text-decoration:none}.sitePortfolio_itemTitle{color:#ff486e;font-weight:400}.sitePortfolio_itemText{color:#2e353b}@media (min-width:768px){.sitePortfolio_itemText{font-size:16.8px}}.sitePortfolio_itemIcon{position:absolute;right:0;bottom:0;width:40px;height:40px;fill:#2e353b}
</style>";?>

  <!--================ - HEAD - ================-->
  <?php include_once($path."head.php"); ?>

  <body>

    <!--================ - NAV - ================-->
    <?php include_once($path."nav.php"); ?>


    <!-- ******************** SITE BANNER : Start ********************-->
    <section class="siteBanner  siteBanner--small  siteBanner_work">
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
        <div class="siteBanner--flex">
          <h1 class="siteBanner_Title">Check out <br> my latest work</h1>

          <!--================ - BREADCRUMBS - ================-->
          <?php include_once($path."breadcrumbs.php"); ?>

        </div>
        <!-- END : SITE BANNER FLEX -->
      </div>
      <!-- END : CONTAINER -->
    </section>
    <!-- ******************** SITE BANNER : End ******************** /-->


    <!-- ******************** SITE PORTFOLIO : Start ********************-->
    <section class="sitePortfolio" id="content">
      <!-- BEGIN : CONTAINER -->
      <div class="container">
        <!-- BEGIN : SITE PORTFOLIO FILTER -->
        <div class="sitePortfolio_filter  sitePortfolio_filter--flex">
          <button class="sitePortfolio_filterBtn  sitePortfolio_filterBtn--active" type="button" name="button" data-filter="*">All Work</button>
          <button class="sitePortfolio_filterBtn" type="button" name="button" data-filter=".uni">University Projects</button>
          <button class="sitePortfolio_filterBtn" type="button" name="button" data-filter=".personal">Personal Projects</button>
        </div>
        <!-- END : SITE PORTFOLIO FILTER /-->
        <!-- BEGIN : SITE PORTFOLIO GRID -->
        <div class="sitePortfolio_grid">
          <!-- BEGIN : SITE PORTFOLIO ITEM -->
          <figure class="sitePortfolio_item  uni">
            <img class="sitePortfolio_itemImg" src="/images/portfolio/portfolio.jpg" alt="" />
            <figcaption class="sitePortfolio_itemDesc">
              <a class="sitePortfolio_itemLink" href="love-manchester-website.php">
                <h3 class="sitePortfolio_itemTitle">Love Manchester Website</h3>
                <span class="sitePortfolio_itemText">University Project</span>
                <svg class="sitePortfolio_itemIcon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#graduation-cap"></use>
                </svg>
              </a>
            </figcaption>
          </figure>
          <!-- END : SITE PORTFOLIO ITEM /-->
          <!-- BEGIN : SITE PORTFOLIO ITEM -->
          <figure class="sitePortfolio_item  uni">
            <img class="sitePortfolio_itemImg" src="/images/portfolio/portfolio.jpg" alt="" />
            <figcaption class="sitePortfolio_itemDesc">
              <a class="sitePortfolio_itemLink" href="#">
                <h3 class="sitePortfolio_itemTitle">MMU ICO Website</h3>
                <span class="sitePortfolio_itemText">University Project</span>
                <svg class="sitePortfolio_itemIcon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#graduation-cap"></use>
                </svg>
              </a>
            </figcaption>
          </figure>
          <!-- END : SITE PORTFOLIO ITEM /-->
          <!-- BEGIN : SITE PORTFOLIO ITEM -->
          <figure class="sitePortfolio_item  personal">
            <img class="sitePortfolio_itemImg" src="/images/portfolio/portfolio.jpg" alt="" />
            <figcaption class="sitePortfolio_itemDesc">
              <a class="sitePortfolio_itemLink" href="#">
                <h3 class="sitePortfolio_itemTitle">Website Portfolio 2014</h3>
                <span class="sitePortfolio_itemText">Personal Project</span>
                <svg class="sitePortfolio_itemIcon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#user"></use>
                </svg>
              </a>
            </figcaption>
          </figure>
          <!-- END : SITE PORTFOLIO ITEM /-->
          <!-- BEGIN : SITE PORTFOLIO ITEM -->
          <figure class="sitePortfolio_item  uni">
            <img class="sitePortfolio_itemImg" src="/images/portfolio/portfolio.jpg" alt="" />
            <figcaption class="sitePortfolio_itemDesc">
              <a class="sitePortfolio_itemLink" href="#">
                <h3 class="sitePortfolio_itemTitle">MMU ICO Website</h3>
                <span class="sitePortfolio_itemText">University Project</span>
                <svg class="sitePortfolio_itemIcon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#graduation-cap"></use>
                </svg>
              </a>
            </figcaption>
          </figure>
          <!-- END : SITE PORTFOLIO ITEM /-->
          <!-- BEGIN : SITE PORTFOLIO ITEM -->
          <figure class="sitePortfolio_item personal">
            <img class="sitePortfolio_itemImg" src="/images/portfolio/portfolio.jpg" alt="" />
            <figcaption class="sitePortfolio_itemDesc">
              <a class="sitePortfolio_itemLink" href="#">
                <h3 class="sitePortfolio_itemTitle">Website Portfolio 2015</h3>
                <span class="sitePortfolio_itemText">Personal Project</span>
                <svg class="sitePortfolio_itemIcon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#user"></use>
                </svg>
              </a>
            </figcaption>
          </figure>
          <!-- END : SITE PORTFOLIO ITEM /-->
          <!-- BEGIN : SITE PORTFOLIO ITEM -->
          <figure class="sitePortfolio_item  uni">
            <img class="sitePortfolio_itemImg" src="/images/portfolio/portfolio.jpg" alt="" />
            <figcaption class="sitePortfolio_itemDesc">
              <a class="sitePortfolio_itemLink" href="#">
                <h3 class="sitePortfolio_itemTitle">MMU ICO Website</h3>
                <span class="sitePortfolio_itemText">University Project</span>
                <svg class="sitePortfolio_itemIcon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#graduation-cap"></use>
                </svg>
              </a>
            </figcaption>
          </figure>
          <!-- END : SITE PORTFOLIO ITEM /-->
        </div>
        <!-- END : SITE PORTFOLIO GRID /-->
      </div>
      <!-- END : CONTAINER /-->
    </section>
    <!-- ******************** SITE PORTFOLIO : End ******************** /-->


    <!--================ - BLOG POSTS - ================-->
    <?php include_once($path."blog-posts.php"); ?>


    <!--================ - FOOTER - ================-->
    <?php include_once($path."footer.php"); ?>

  </body>
</html>
