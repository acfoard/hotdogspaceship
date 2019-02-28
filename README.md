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
<h4>/api/users POST</h4>
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
<p>&nbsp;</p>
