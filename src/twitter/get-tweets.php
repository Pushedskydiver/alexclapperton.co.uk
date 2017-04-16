<?php

class GetTweets {
    static public function get_most_recent($screen_name, $count, $retweets)
    {
        //codebird is going to be doing the oauth lifting for us
        require_once('codebird.php');

        //These are your keys/tokens/secrets provided by Twitter
        $CONSUMER_KEY = 'Ou9rrtiuHve8YreRUQheMvKmG';
        $CONSUMER_SECRET = 'jpJCmt7WVUYjfkl0Dv8MrdkbpNYxn0bHGYxz11xcBWbMDqRFJY';
        $ACCESS_TOKEN = '1474430832-WSAwEgQowd3gcGYc1Ilux4ELLcklm48AORqcfgd';
        $ACCESS_TOKEN_SECRET = 'GQqZ5LtiFPDGLP5YVE2wCUmLDkkLoirJYh2nZ968SYhDQ';

        //Get authenticated
        \Codebird\Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);

        $cb = \Codebird\Codebird::getInstance();
        $cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);

        //These are our params passed in for our request to twitter
        //The GET request is made by our codebird instance for us further down
        $params = array(
            'screen_name' => $screen_name,
            'count' => $count,
            'include_rts' => $retweets,
        );

        //tweets returned by Twitter in JSON object format
        $tweets = (array) $cb->statuses_userTimeline($params);

        //Let's encode it for our JS/jQuery and return it
        return json_encode($tweets);
    }
}
