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
