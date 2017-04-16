export default function() {
  this.post('/oauth/token', (db, request) => {
    if (request.requestBody.indexOf("username=admin&password=admin") >= 0) {
      return new Response(200, {}, {
        "access_token": "fake_token",
        "token_type": "bearer",
        "expires_in": 7200,
        "refresh_token": "fake_refresh_token",
        "created_at": 1491306107
      });
    } else {
      return new Response(401, {}, {
        "error": "invalid_grant",
        "error_description": "Invalid user or password"
      });
    }
  });

  this.namespace = 'api/v1';

  this.resource('courses');
  this.resource('chapters');
  this.resource('contents');
}
