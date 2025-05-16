document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  
  const query = document.getElementById("search").value;

  // ❌ Vulnérabilité #1 : XSS (injection directe dans innerHTML)
  document.getElementById("results").innerHTML = "You searched for: " + query;

  // ❌ Vulnérabilité #2 : jQuery vulnérable utilisé
  $('#results').append("<p>Query received.</p>");

  // ❌ Vulnérabilité #3 : usage d'eval dangereux
  if (query.includes("eval")) {
    eval(query); // ex: input: alert('XSS')
  }
});
