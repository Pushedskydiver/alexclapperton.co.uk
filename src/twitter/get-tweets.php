<?php

/**
 * GetTweets - Used with Codebird-php to pull tweets from Twitter
 * https://github.com/kevindeleon/get-tweets
 *
 * @author Kevin deLeon <https://github.com/kevindeleon/>
 * @copyright 2013 Kevin deLeon <https://github.com/kevindeleon/>
 *
 * Licensed under the MIT license.
 * https://github.com/kevindeleon/get-tweets/blob/master/LICENSE
 */


/**
 * Class GetTweets
 */
class GetTweets {

	/**
	 * Gets most recent tweets
	 * @param String twitter username (ex. kevindeleon)
	 * @param String number of tweets
	 * @param String include retweets true, false
	 * @return JSON encoded tweets
	 */
	static public function get_most_recent($screen_name, $count, $retweets = NULL)
	{
		//let's include codebird, as it's going to be doing the oauth lifting for us
		require_once('codebird.php');

		//These are your keys/tokens/secrets provided by Twitter
		$CONSUMER_KEY = '11s1vdqfYznfj9Op1FzRAH9ny';
		$CONSUMER_SECRET = 'BUtqcy2dmW4C1ZqG0YvEFDXIpGOucVBnyJXVraIexOs36aGJTD';
		$ACCESS_TOKEN = '1474430832-OM3nnqAzwSe8caOfzQXSkRhcP2dr41JzUwB72nl';
		$ACCESS_TOKEN_SECRET = 'BVh7sEWAYWgWTxwucYCkIzxG4s1nxKerrADDMLD3a1Qj0';

		//Get authenticated
		\Codebird\Codebird::setConsumerKey($CONSUMER_KEY, $CONSUMER_SECRET);
		$cb = \Codebird\Codebird::getInstance();
		$cb->setToken($ACCESS_TOKEN, $ACCESS_TOKEN_SECRET);
		//These are our params passed in
		$params = array(
			'screen_name' => $screen_name,
			'count' => $count,
			'include_rts' => $retweets,
		);

		//tweets returned by Twitter
		$tweets = (array) $cb->statuses_userTimeline($params);

		//Let's encode it for our JS/jQuery
		return json_encode($tweets);
	}

}
