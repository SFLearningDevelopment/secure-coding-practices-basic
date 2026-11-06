/* build: 2026110601 */
/* Question bank for sc1-exam.html: 20 scenarios (t: "s") and 20 multiple-choice questions (t: "m").
   m = module number, a = index of the correct option in o. */
window.SC1_BANK = [
 {
  "id": "s01",
  "t": "s",
  "m": "2",
  "q": "Customers report that they can see other customers' invoices by changing the number in the address.",
  "o": [
   "Look the invoice up by its ID and the signed-in user's ID, and return 404 if no match is found",
   "Change invoice IDs to random UUIDs so they cannot be guessed",
   "Move the invoice ID from the address into the request body",
   "Add a rate limit of 10 invoice requests a minute"
  ],
  "a": 0,
  "code": "app.get(\"/api/invoices/:id\", requireLogin, async (req, res) => {\n  res.json(await db.invoices.findById(req.params.id));\n});"
 },
 {
  "id": "s02",
  "t": "s",
  "m": "5",
  "q": "A product search builds its query from the search box.",
  "o": [
   "Replace every quote in term with two quotes before building the query",
   "Remove the words SELECT, UNION and DROP from term",
   "Use a placeholder and pass the value separately: cur.execute(\"SELECT * FROM products WHERE name LIKE ?\", (f\"%{term}%\",))",
   "Limit term to 20 characters"
  ],
  "a": 2,
  "code": "cur.execute(f\"SELECT * FROM products WHERE name LIKE '%{term}%'\")"
 },
 {
  "id": "s03",
  "t": "s",
  "m": "5",
  "q": "Comments from users are shown on a page with this browser code. One comment made an alert box appear for everyone.",
  "o": [
   "Remove the words script and alert from comments before saving them",
   "Create the list item with document.createElement and set its textContent to the comment text",
   "Wrap comment.text in quotes before adding it",
   "Only show comments from signed-in users"
  ],
  "a": 1,
  "code": "list.innerHTML += \"<li>\" + comment.text + \"</li>\";"
 },
 {
  "id": "s04",
  "t": "s",
  "m": "3",
  "q": "When an order fails in production, the API returns the full exception, including the SQL query and a stack trace with file paths.",
  "o": [
   "Return the exception only to users who are signed in",
   "Return a general message with an error ID, and write the full details to the server log",
   "Encrypt the stack trace before returning it",
   "Shorten the stack trace to three lines"
  ],
  "a": 1
 },
 {
  "id": "s05",
  "t": "s",
  "m": "4",
  "q": "A code review finds that passwords are stored as SHA-256(password), with no salt.",
  "o": [
   "Switch to SHA-512, which is longer",
   "Encrypt the stored hashes with AES",
   "Hash new passwords with Argon2id, and re-hash each old password with Argon2id when its user next signs in",
   "Add the same fixed text to every password before hashing"
  ],
  "a": 2
 },
 {
  "id": "s06",
  "t": "s",
  "m": "6",
  "q": "The sign-in page says \"No account found\" for unknown emails and \"Incorrect password\" for known ones, and it allows unlimited attempts.",
  "o": [
   "Show one message, such as \"Email or password is incorrect\", and limit failed attempts per account and per source",
   "Add a CAPTCHA after 1,000 failed attempts",
   "Keep the messages but log every failed attempt",
   "Ask users to change their password every 30 days"
  ],
  "a": 0
 },
 {
  "id": "s07",
  "t": "s",
  "m": "2",
  "q": "A link-preview feature fetches any URL a user gives it. A tester got it to fetch http://169.254.169.254/latest/meta-data/ and return the result.",
  "o": [
   "Block URLs that contain the text 169.254",
   "Allow only https URLs whose parsed host is on a fixed list, block internal addresses, and require IMDSv2 on AWS",
   "Fetch the URL, but return only the first 100 characters",
   "Allow any URL that starts with https"
  ],
  "a": 1
 },
 {
  "id": "s08",
  "t": "s",
  "m": "1",
  "q": "The basket form only allows quantities from 1 to 10, but the API accepts -5 and gives the user a refund.",
  "o": [
   "Add a second check in the browser before the request is sent",
   "Hide the quantity field and use buttons instead",
   "Check the request on the server against a schema: a whole number from 1 to 10, and no unknown fields",
   "Make the form submit with POST instead of GET"
  ],
  "a": 2
 },
 {
  "id": "s09",
  "t": "s",
  "m": "3",
  "q": "A storage bucket that holds database backups can be listed and downloaded by anyone on the internet.",
  "o": [
   "Rename the bucket to something hard to guess",
   "Turn on public access blocking, make the bucket private, and give access only to the roles that need it",
   "Delete the oldest backups",
   "Compress the backups before uploading them"
  ],
  "a": 1
 },
 {
  "id": "s10",
  "t": "s",
  "m": "6",
  "q": "The session cookie is set like this:",
  "o": [
   "Set-Cookie: sid=8f3a91c2; Path=/; HttpOnly; Secure; SameSite=Lax",
   "Set-Cookie: sid=8f3a91c2; Path=/; Max-Age=31536000",
   "Set-Cookie: sid=8f3a91c2; Path=/; Domain=*",
   "Store sid in localStorage instead of a cookie"
  ],
  "a": 0,
  "code": "Set-Cookie: sid=8f3a91c2; Path=/"
 },
 {
  "id": "s11",
  "t": "s",
  "m": "6",
  "q": "A tester notices that the session ID is the same before and after a user signs in.",
  "o": [
   "Make the session ID longer",
   "Create a new session ID when the user signs in",
   "Encrypt the session ID in the cookie",
   "End the session after one year"
  ],
  "a": 1
 },
 {
  "id": "s12",
  "t": "s",
  "m": "4",
  "q": "Password-reset links contain a token made like this:",
  "o": [
   "Add the user's email address to the token",
   "Encode the token with Base64",
   "Use crypto.randomBytes(32), store only its hash, make it expire soon and allow it to be used once",
   "Use Math.random() instead of Date.now()"
  ],
  "a": 2,
  "code": "const token = Date.now().toString(36);"
 },
 {
  "id": "s13",
  "t": "s",
  "m": "5",
  "q": "An image tool runs a shell command with a file name from the user.",
  "o": [
   "Put the file name in double quotes inside the command",
   "Remove semicolons from the file name",
   "Run convert with execFile and an argument list, after checking the file name against a strict pattern",
   "Run the command as the root user so it always works"
  ],
  "a": 2,
  "code": "exec(\"convert \" + fileName + \" out.png\");"
 },
 {
  "id": "s14",
  "t": "s",
  "m": "2",
  "q": "When users sign up, the API saves every field in the request body. A tester signed up with {\"email\":\"x@example.com\",\"role\":\"admin\"} and became an admin.",
  "o": [
   "Accept only the fields sign-up needs, and set the role on the server",
   "Rename the role field to something harder to guess",
   "Check the role in the browser before sending the form",
   "Log every new admin account"
  ],
  "a": 0
 },
 {
  "id": "s15",
  "t": "s",
  "m": "3",
  "q": "The API's CORS setup copies any Origin header into Access-Control-Allow-Origin and also sends Access-Control-Allow-Credentials: true.",
  "o": [
   "Remove Access-Control-Allow-Credentials and keep the rest",
   "Allow only a fixed list of your own website origins",
   "Set Access-Control-Allow-Origin to *",
   "Add the X-Content-Type-Options header"
  ],
  "a": 1
 },
 {
  "id": "s16",
  "t": "s",
  "m": "1",
  "q": "The checkout API reads the price of each item from the request body and charges that amount.",
  "o": [
   "Check that the price is more than zero",
   "Look the price up on the server from the product ID, and reject unknown fields such as price",
   "Encrypt the price in the browser before sending it",
   "Round the price to two decimal places"
  ],
  "a": 1
 },
 {
  "id": "s17",
  "t": "s",
  "m": "6",
  "q": "An API reads the user ID from a JWT like this:",
  "o": [
   "Check that payload.sub is a number",
   "Verify the token's signature with the expected algorithm, and check its expiry, issuer and audience",
   "Base64-decode the token twice",
   "Store the token in localStorage instead of a cookie"
  ],
  "a": 1,
  "code": "const payload = JSON.parse(atob(token.split(\".\")[1]));\nconst userId = payload.sub;"
 },
 {
  "id": "s18",
  "t": "s",
  "m": "4",
  "q": "An AES key for customer data is written in the source code, which is in Git.",
  "o": [
   "Move the key to an environment variable and keep using it",
   "Move the key to a key management service, create a new key, and re-encrypt the data, because the old key has been exposed",
   "Make the repository private",
   "Encode the key with Base64"
  ],
  "a": 1,
  "code": "const KEY = \"6b1f0d9c4a2e8f7b3c5d1e0a9b8c7d6e\";"
 },
 {
  "id": "s19",
  "t": "s",
  "m": "0",
  "q": "A developer starts the practice app with docker run -p 3000:3000 bkimminich/juice-shop on their office laptop.",
  "o": [
   "Nothing needs to change, because it is only a practice app",
   "Stop it and start it again with -p 127.0.0.1:3000:3000, so only their own computer can reach it",
   "Change the port to 8080",
   "Add a password to the office Wi-Fi"
  ],
  "a": 1
 },
 {
  "id": "s20",
  "t": "s",
  "m": "3",
  "q": "A Spring Boot app exposes /actuator/env and /actuator/heapdump to the internet in production.",
  "o": [
   "Rename the endpoints to something hard to guess",
   "Expose only the health endpoint publicly, and protect or turn off the others in production",
   "Turn off logging for these endpoints",
   "Move the app to a different port"
  ],
  "a": 1
 },
 {
  "id": "m01",
  "t": "m",
  "m": "0",
  "q": "In the OWASP Top 10:2025, which category is ranked first?",
  "o": [
   "Injection",
   "Broken Access Control",
   "Security Misconfiguration",
   "Cryptographic Failures"
  ],
  "a": 1
 },
 {
  "id": "m02",
  "t": "m",
  "m": "0",
  "q": "What is the difference between a CWE and a CVE?",
  "o": [
   "A CWE is a type of weakness; a CVE is one specific weakness in one product",
   "A CWE is a score from 0 to 10; a CVE is a type of weakness",
   "They are two names for the same thing",
   "A CWE is for web apps; a CVE is for mobile apps"
  ],
  "a": 0
 },
 {
  "id": "m03",
  "t": "m",
  "m": "0",
  "q": "Which systems may you test with the techniques from this course?",
  "o": [
   "Any public website, if you are careful",
   "A client's test website, if it is not in production",
   "Only systems you own or have written permission to test",
   "Any SourceFuse system you can reach"
  ],
  "a": 2
 },
 {
  "id": "m04",
  "t": "m",
  "m": "1",
  "q": "What does an allow-list check do?",
  "o": [
   "Rejects values that are on a list of known bad values",
   "Accepts only values that match exactly what is allowed, and rejects everything else",
   "Removes dangerous characters and keeps the rest",
   "Logs every value so it can be checked later"
  ],
  "a": 1
 },
 {
  "id": "m05",
  "t": "m",
  "m": "1",
  "q": "What does the principle of least privilege mean?",
  "o": [
   "Users get the fewest screens possible",
   "Each user, service and account gets only the access it needs for its job",
   "Admins should have fewer rights than users",
   "Passwords should be as short as possible"
  ],
  "a": 1
 },
 {
  "id": "m06",
  "t": "m",
  "m": "1",
  "q": "A permission check throws an unexpected error. What does \"fail safely\" mean here?",
  "o": [
   "Allow the action so the user is not blocked",
   "Deny the action and log the error",
   "Retry until the check succeeds",
   "Ask the user whether to continue"
  ],
  "a": 1
 },
 {
  "id": "m07",
  "t": "m",
  "m": "1",
  "q": "Which of these is a trust boundary?",
  "o": [
   "Between two functions in the same server program",
   "Between the user's browser and your server",
   "Between two lines of the same file",
   "Between the server's memory and its CPU"
  ],
  "a": 1
 },
 {
  "id": "m08",
  "t": "m",
  "m": "2",
  "q": "Why return 404 rather than 403 for a record the user does not own?",
  "o": [
   "404 responses are faster",
   "So attackers cannot tell which record IDs exist",
   "403 is not a valid status code for APIs",
   "Browsers cache 403 responses"
  ],
  "a": 1
 },
 {
  "id": "m09",
  "t": "m",
  "m": "2",
  "q": "What is an insecure direct object reference (IDOR)?",
  "o": [
   "A user changes an ID in a request and gets a record they should not see",
   "A link to an object that no longer exists",
   "A database index that is out of date",
   "A broken image on a web page"
  ],
  "a": 0
 },
 {
  "id": "m10",
  "t": "m",
  "m": "3",
  "q": "What does the Strict-Transport-Security header do?",
  "o": [
   "Tells the browser to use only HTTPS for the site",
   "Blocks all scripts on the page",
   "Hides the server's version",
   "Stops the page from being cached"
  ],
  "a": 0
 },
 {
  "id": "m11",
  "t": "m",
  "m": "3",
  "q": "What does X-Content-Type-Options: nosniff do?",
  "o": [
   "Stops the browser from guessing a file's type",
   "Stops search engines from indexing the page",
   "Hides cookies from scripts",
   "Blocks requests from other countries"
  ],
  "a": 0
 },
 {
  "id": "m12",
  "t": "m",
  "m": "3",
  "q": "In the OWASP Top 10:2025, which category moved up to second place?",
  "o": [
   "Injection",
   "Security Misconfiguration",
   "Insecure Design",
   "Authentication Failures"
  ],
  "a": 1
 },
 {
  "id": "m13",
  "t": "m",
  "m": "4",
  "q": "Which of these is encoding, not encryption?",
  "o": [
   "AES-256-GCM",
   "TLS",
   "Base64",
   "RSA"
  ],
  "a": 2
 },
 {
  "id": "m14",
  "t": "m",
  "m": "4",
  "q": "What is a salt in password hashing?",
  "o": [
   "A secret key shared by all passwords",
   "Random data added to each password before hashing, so equal passwords give different hashes",
   "A second password the user must remember",
   "A limit on how many times a password can be used"
  ],
  "a": 1
 },
 {
  "id": "m15",
  "t": "m",
  "m": "4",
  "q": "If PBKDF2 with HMAC-SHA-256 must be used for passwords, what is the minimum recommended number of iterations?",
  "o": [
   "1,000",
   "10,000",
   "100,000",
   "600,000"
  ],
  "a": 3
 },
 {
  "id": "m16",
  "t": "m",
  "m": "5",
  "q": "A query must sort by a column the user chooses. Column names cannot be parameters. What should you do?",
  "o": [
   "Join the column name into the query text",
   "Pick the column name from a fixed list in your code, based on the user's choice",
   "Remove spaces from the user's text and use it",
   "Encode the column name with Base64"
  ],
  "a": 1
 },
 {
  "id": "m17",
  "t": "m",
  "m": "5",
  "q": "What is DOM-based cross-site scripting?",
  "o": [
   "The server stores a script in the database",
   "The browser's own script writes user data into the page unsafely",
   "An attacker changes the DNS records of a site",
   "A script that runs on the database server"
  ],
  "a": 1
 },
 {
  "id": "m18",
  "t": "m",
  "m": "6",
  "q": "Under NIST SP 800-63B revision 4, when should users be asked to change their password?",
  "o": [
   "Every 30 days",
   "Every 90 days",
   "When there is a sign it may have been leaked",
   "Every time they sign in"
  ],
  "a": 2
 },
 {
  "id": "m19",
  "t": "m",
  "m": "6",
  "q": "What does the SameSite cookie setting help prevent?",
  "o": [
   "Scripts reading the cookie",
   "The cookie being sent with requests started by other websites",
   "The cookie being sent over HTTP",
   "The cookie expiring too early"
  ],
  "a": 1
 },
 {
  "id": "m20",
  "t": "m",
  "m": "6",
  "q": "Which second factor is weakest?",
  "o": [
   "A passkey",
   "A hardware security key",
   "A code from an authenticator app",
   "A code sent by SMS"
  ],
  "a": 3
 }
];
