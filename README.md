# hotdogspaceship


<h2>API Guide</h2>
<h4>/api/signup POST</h4>
<p>Registers a user to the site.</p>
<p><strong>URL:</strong> /api/signup</p>
<p><strong>Verb:</strong> POST</p>
<h3>Input</h3>
<table style="width: 628px;">
<tbody>
<tr>
<td style="width: 133px;"><strong>Parameter</strong></td>
<td style="width: 149px;"><strong>Data Type</strong></td>
<td style="width: 193px;"><strong>Valid Values</strong></td>
<td style="width: 279px;"><strong>Description</strong></td>
</tr>
<tr>
<td style="width: 133px;">username</td>
<td style="width: 149px;">string</td>
<td style="width: 193px;">string</td>
<td style="width: 279px;">the username you wish to use for your account</td>
</tr>
<tr>
<td style="width: 133px;">password</td>
<td style="width: 149px;">string</td>
<td style="width: 193px;">string</td>
<td style="width: 279px;">the password you wish to use for your account</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>Output</h3>
<p>If the username matches an existing user you will recieve a Message Response indicating the issue.&nbsp;</p>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON</p>
<table style="width: 621px;">
<tbody>
<tr>
<td style="width: 116px;"><strong>Parameter</strong></td>
<td style="width: 111px;"><strong>Data Type</strong></td>
<td style="width: 153px;"><strong>Valid Values</strong></td>
<td style="width: 227px;"><strong>Description</strong></td>
</tr>
<tr>
<td style="width: 116px;">username</td>
<td style="width: 111px;">string</td>
<td style="width: 153px;">string</td>
<td style="width: 227px;">the username you wish to use for your account</td>
</tr>
<tr>
<td style="width: 116px;">password</td>
<td style="width: 111px;">string</td>
<td style="width: 153px;">string</td>
<td style="width: 227px;">the hashed password for your account</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/login POST</h4>
<p>Logins to the site.</p>
<p><strong>URL:</strong> /api/login</p>
<p><strong>Verb:</strong>&nbsp;POST</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>username</td>
<td>string</td>
<td>string</td>
<td>the username you wish to use for your account</td>
</tr>
<tr>
<td>password</td>
<td>string</td>
<td>string</td>
<td>the password you wish to use for your account</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>Output</h3>
<p>If the username does not match an existing user you will recieve a Message Response indicating the issue.&nbsp;</p>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>token</td>
<td>string</td>
<td>string</td>
<td>the web token generated for this session</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h4>/api/users GET</h4>
<p>Returns information on all users.</p>
<p><strong>URL:</strong> /api/users</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<p>none</p>
<p>&nbsp;</p>
<h3>Output</h3>
<p>If the username does not match an existing user you will recieve a Message Response indicating the issue.&nbsp;</p>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for each user</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the user</td>
</tr>
<tr>
<td>username</td>
<td>string</td>
<td>string</td>
<td>the user's username</td>
</tr>
<tr>
<td>password</td>
<td>string</td>
<td>string</td>
<td>the user's hashed password</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this user registered</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this user was last updated</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/users/:id GET</h4>
<p>Returns information on a specific user.</p>
<p><strong>URL:</strong> /api/users</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the id of the user you are searching for</td>
</tr>
</tbody>
</table>
<p>&nbsp;&nbsp;</p>
<h3>Output</h3>
<p>If the username does not match an existing user you will recieve a Message Response indicating the issue.&nbsp;</p>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for the user</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the user</td>
</tr>
<tr>
<td>username</td>
<td>string</td>
<td>string</td>
<td>the user's username</td>
</tr>
<tr>
<td>password</td>
<td>string</td>
<td>string</td>
<td>the user's hashed password</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this user registered</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this user was last updated</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/games GET</h4>
<p>Returns information on all games.</p>
<p><strong>URL:</strong> /api/games</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<p>none</p>
<p>&nbsp;</p>
<h3>Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for each game</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the game</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>string</td>
<td>the title of the game</td>
</tr>
<tr>
<td>description</td>
<td>string</td>
<td>string</td>
<td>a short description of the game</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>string</td>
<td>the type of game</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this game was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this game was last updated</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/games/:id GET</h4>
<p>Returns information on a specific game.</p>
<p><strong>URL:</strong> /api/games/:id</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the id of the game you are searching for</td>
</tr>
</tbody>
</table>
<p>&nbsp;&nbsp;</p>
<h3>Output</h3>
<p>If the gameId does not match an existing game you will recieve a Message Response indicating the issue.&nbsp;</p>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for each game</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the game</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>string</td>
<td>the title of the game</td>
</tr>
<tr>
<td>description</td>
<td>string</td>
<td>string</td>
<td>a short description of the game</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>string</td>
<td>the type of game</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this game was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this game was last updated</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/comments GET</h4>
<p>Returns information on all comments.</p>
<p><strong>URL:</strong> /api/comments</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<p>none</p>
<p>&nbsp;</p>
<h3>Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for each comment</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the comment</td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>string</td>
<td>the text of the comment</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this comment was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this comment was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game on which the comment was left</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who left the comment</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/comments/:id GET</h4>
<p>Returns information on a specific comment.</p>
<p><strong>URL:</strong> /api/comments/:id</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the id of the comment you are searching for</td>
</tr>
</tbody>
</table>
<p>&nbsp;&nbsp;</p>
<h3>Output</h3>
<p>If the gameId does not match an existing game you will recieve a Message Response indicating the issue.&nbsp;</p>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for the comment</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the comment</td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>string</td>
<td>the text of the comment</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this comment was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this comment was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game on which the comment was left</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who left the comment</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h4>/api/ratings GET</h4>
<p>Returns information on all ratings.</p>
<p><strong>URL:</strong> /api/ratings</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<p>none</p>
<p>&nbsp;</p>
<h3>Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for each rating</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the rating</td>
</tr>
<tr>
<td>rating</td>
<td>int</td>
<td>int</td>
<td>the number rating of the game</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this rating was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this rating was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game on which the rating was left</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who left the rating</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/ratings/:id GET</h4>
<p>Returns information on a specific rating.</p>
<p><strong>URL:</strong> /api/ratings/:id</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the id of the rating you are searching for</td>
</tr>
</tbody>
</table>
<p>&nbsp;&nbsp;</p>
<h3>Output</h3>
<p>If the Id does not match an existing rating you will recieve a Message Response indicating the issue.&nbsp;</p>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for the rating</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the rating</td>
</tr>
<tr>
<td>rating</td>
<td>int</td>
<td>int</td>
<td>the number rating of the game</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this rating was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this rating was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game on which the rating was left</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who left the rating</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h4>/api/scores GET</h4>
<p>Returns information on all scores.</p>
<p><strong>URL:</strong> /api/scores</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<p>none</p>
<p>&nbsp;</p>
<h3>Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for each score</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the score</td>
</tr>
<tr>
<td>score</td>
<td>int</td>
<td>int</td>
<td>the score the user earned on the game</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this score was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this score was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game on which the score was for</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who earned the score</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/scores/:id GET</h4>
<p>Returns information on a specific score.</p>
<p><strong>URL:</strong> /api/scores/:id</p>
<p><strong>Verb:</strong>&nbsp;GET</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the id of the score you are searching for</td>
</tr>
</tbody>
</table>
<p>&nbsp;&nbsp;</p>
<h3>Output</h3>
<p>If the Id does not match an existing score you will recieve a Message Response indicating the issue.&nbsp;</p>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for the score</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the score</td>
</tr>
<tr>
<td>score</td>
<td>int</td>
<td>int</td>
<td>the score the user earned on the game</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this score was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this score was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game on which the score was for</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who earned the score</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h4>/api/comments POST</h4>
<p>Records a comment in relation to a game.</p>
<p><strong>URL:</strong> /api/comments</p>
<p><strong>Verb:</strong>&nbsp;POST</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>string</td>
<td>the text of the comment</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game for which the comment is being left.</td>
</tr>
<tr>
<td>token</td>
<td>string</td>
<td>string</td>
<td>the JSON web token received when logging in</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>&nbsp;Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for posted comment</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the score</td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>string</td>
<td>the text of the comment</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this comment was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this comment was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game for which the comment was recorded</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who left the comment</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/ratings POST</h4>
<p>Records a number rating a game.</p>
<p><strong>URL:</strong> /api/ratings</p>
<p><strong>Verb:</strong>&nbsp;POST</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>rating</td>
<td>int</td>
<td>int</td>
<td>the rating of the game</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game for which the rating is being left.</td>
</tr>
<tr>
<td>token</td>
<td>string</td>
<td>string</td>
<td>the JSON web token received when logging in</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>&nbsp;Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for posted comment</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the rating</td>
</tr>
<tr>
<td>rating</td>
<td>string</td>
<td>string</td>
<td>the number rating</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this rating was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this rating was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game for which the rating was recorded</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who left the rating</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h4>/api/users/:id PUT</h4>
<p>Updates a User's username or Password.</p>
<p><strong>URL:</strong> /api/users/:id</p>
<p><strong>Verb:</strong>&nbsp;PUT</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>username</td>
<td>string</td>
<td>string</td>
<td>the new username</td>
</tr>
<tr>
<td>password</td>
<td>string</td>
<td>string</td>
<td>the new password</td>
</tr>
<tr>
<td>token</td>
<td>string</td>
<td>string</td>
<td>the JSON web token received when logging in</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>&nbsp;Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the user</td>
</tr>
<tr>
<td>username</td>
<td>string</td>
<td>string</td>
<td>the username for the user</td>
</tr>
<tr>
<td>password</td>
<td>string</td>
<td>string</td>
<td>the encrypted password for the user</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this user was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this user was last updated</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/comments/:id PUT</h4>
<p>Updates a comment in relation to a game.</p>
<p><strong>URL:</strong> /api/comments/:id</p>
<p><strong>Verb:</strong>&nbsp;PUT</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>string</td>
<td>the text of the comment</td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the ID of the comment to be updated</td>
</tr>
<tr>
<td>token</td>
<td>string</td>
<td>string</td>
<td>the JSON web token received when logging in</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>&nbsp;Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for posted comment</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the comment</td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>string</td>
<td>the text of the comment</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this comment was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this comment was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game for which the comment was recorded</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who left the comment</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h4>/api/ratings/:id PUT</h4>
<p>Updates a number rating a game.</p>
<p><strong>URL:</strong> /api/ratings</p>
<p><strong>Verb:</strong>&nbsp;PUT</p>
<h3>Input</h3>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>rating</td>
<td>int</td>
<td>int</td>
<td>the rating of the game</td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the ID of the rating to be updated</td>
</tr>
<tr>
<td>token</td>
<td>string</td>
<td>string</td>
<td>the JSON web token received when logging in</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3>&nbsp;Output</h3>
<p>If the call is successful you will receive a 200 OK status and the following data returned as JSON for posted rating</p>
<table>
<tbody>
<tr>
<td><strong>Parameter</strong></td>
<td><strong>Data Type</strong></td>
<td><strong>Valid Values</strong></td>
<td><strong>Description</strong></td>
</tr>
<tr>
<td>id</td>
<td>int</td>
<td>int</td>
<td>the database id for the rating</td>
</tr>
<tr>
<td>rating</td>
<td>string</td>
<td>string</td>
<td>the number rating</td>
</tr>
<tr>
<td>createdAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this rating was added</td>
</tr>
<tr>
<td>updateAt</td>
<td>DateTime</td>
<td>DateTime stamp</td>
<td>the date and time stamp when this rating was last updated</td>
</tr>
<tr>
<td>gameId</td>
<td>int</td>
<td>int</td>
<td>the ID of the game for which the rating was recorded</td>
</tr>
<tr>
<td>userId</td>
<td>int</td>
<td>int</td>
<td>the ID of the user who left the rating</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
