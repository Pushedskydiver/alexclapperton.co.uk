<div class="siteBanner_breadcrumbs">
  <?php
    $paths = $_SERVER["PHP_SELF"];
    $parts = explode('/',$paths);
    $fullpath = basename($_SERVER["REQUEST_URI"]);

    if (count($parts) < 2) {
        echo("home");
    }
    else {
        echo ('<span class="siteBanner_breadcrumbsItem"><a class="siteBanner_breadcrumbsLink" href="/index.php">Home</a></span>');

        for ($i = 1; $i < count($parts); $i++) {
            if (!strstr($parts[$i],".")) {
                if ($fullpath !== 'index.php') {
                    echo("<span class='siteBanner_breadcrumbsItem'><a class='siteBanner_breadcrumbsLink' href=\"");
                    for ($j = 0; $j <= $i; $j++) {echo $parts[$j]."/";};
                    echo("\">". str_replace('-', ' ', $parts[$i])."</a></span>");
                }
                else {
                    echo ("<span class='siteBanner_breadcrumbsItem'>". str_replace('-', ' ', $parts[$i])."</span>");
                }
            }
            else {
                if ($fullpath !== 'index.php') {
                    $str = $parts[$i];
                    $pos = strrpos($str,".");
                    $parts[$i] = substr($str, 0, $pos);
                    echo("<span class='siteBanner_breadcrumbsItem'>". str_replace('-', ' ', $parts[$i])."</span>");
                }
            };
        };
    };
  ?>
</div>
