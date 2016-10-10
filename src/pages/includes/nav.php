<!-- ******************** SITE HEADER : Start ******************** /-->
<header class="siteHeader">
  <!-- BEGIN : CONTAINER -->
  <div class="container">
    <!-- BEGIN : SKIP LINKS -->
    <div class="skipLinks">
      <a href="#nav" class="skipLink  skipLink--hidden  skipLink--focusable">Skip to navigation</a>
      <a href="#content" class="skipLink  skipLink--hidden  skipLink--focusable  skipLink--scrollTo" data-offset-top="130">Skip to content</a>
    </div>
    <!-- END : SKIP LINKS /-->
    <!-- BEGIN : SITE HEADER FLEX -->
    <div class="siteHeader--flex">
      <!-- BEGIN : MAIN HEADER -->
      <div class="mainHeader">
        <a href="#" class="mainHeader_logo"><span class="mainHeader_logoPeriod">.</span>Alex</a>
      </div>
      <!-- END : MAIN HEADER /-->
      <!-- BEGIN : SITE NAV -->
      <nav class="siteNav" id="nav">
        <!-- BEGIN : SITE NAV LINK -->
        <a href="/index.php" <?php if($current == 'home') {echo 'class="siteNav_link  siteNav_link--active"';} else {echo 'class="siteNav_link"';} ?>>
          <svg class="siteNav_linkIcon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#home"></use>
          </svg>
          <span class="siteNav_linkText">Home</span>
        </a>
        <!-- END : SITE NAV LINK /-->
        <!-- BEGIN : SITE NAV LINK -->
        <a href="/my-work/index.php" <?php if($current == 'work') {echo 'class="siteNav_link  siteNav_link--active"';} else {echo 'class="siteNav_link"';} ?>>
          <svg class="siteNav_linkIcon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#portfolio"></use>
          </svg>
          <span class="siteNav_linkText">My Work</span>
        </a>
        <!-- END : SITE NAV LINK /-->
        <!-- BEGIN : SITE NAV LINK -->
        <a href="/blog/index.php" <?php if($current == 'blog') {echo 'class="siteNav_link  siteNav_link--active"';} else {echo 'class="siteNav_link"';} ?>>
          <svg class="siteNav_linkIcon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#book"></use>
          </svg>
          <span class="siteNav_linkText">Blog</span>
        </a>
        <!-- END : SITE NAV LINK /-->
        <!-- BEGIN : SITE NAV LINK -->
        <a href="/contact.php" <?php if($current == 'contact') {echo 'class="siteNav_link  siteNav_link--active"';} else {echo 'class="siteNav_link"';} ?>>
          <svg class="siteNav_linkIcon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#mail"></use>
          </svg>
          <span class="siteNav_linkText">Contact</span>
        </a>
        <!-- END : SITE NAV LINK /-->
      </nav>
      <!-- END : SITE NAV /-->
      <!-- BEGIN : SOCIAL HEADER -->
      <div class="socialHeader  socialHeader--flex">
        <!-- BEGIN : SOCIAL HEADER FLEX ITEM -->
        <div class="socialHeader_flexItem">
          <a class="socialHeader_link" href="#">
            <svg class="socialHeader_linkIcon  socialHeader_linkIcon--facebook">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#facebook"></use>
            </svg>
          </a>
        </div>
        <!-- END : SOCIAL HEADER FLEX ITEM /-->
        <!-- BEGIN : SOCIAL HEADER FLEX ITEM -->
        <div class="socialHeader_flexItem">
          <a class="socialHeader_link" href="#">
            <svg class="socialHeader_linkIcon  socialHeader_linkIcon--twitter">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#twitter"></use>
            </svg>
          </a>
        </div>
        <!-- END : SOCIAL HEADER FLEX ITEM /-->
        <!-- BEGIN : SOCIAL HEADER FLEX ITEM -->
        <div class="socialHeader_flexItem">
          <a class="socialHeader_link" href="#">
            <svg class="socialHeader_linkIcon  socialHeader_linkIcon--linkedin">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/images/icons/sprite.svg#linkedin"></use>
            </svg>
          </a>
        </div>
        <!-- END : SOCIAL HEADER FLEX ITEM -->
      </div>
      <!-- END : SOCIAL HEADER -->
    </div>
    <!-- END : SITE HEADER FLEX /-->
  </div>
  <!-- END : CONTAINER /-->
</header>
<!-- ******************** SITE HEADER : End ******************** /-->
