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
  <?php $critical_path = "";?>

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
