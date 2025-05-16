# 🛡️ Vuln Web App – Démo d'application avec vulnérabilités détectables

Ce dépôt contient une simple application web HTML/CSS/JavaScript volontairement vulnérable, destinée à la démonstration de détection d’erreurs de sécurité via des outils comme **Semgrep** et **Snyk**.

---

## 📂 Structure

vuln-app/
├── index.html # Page principale
├── style.css # Styles de base
├── script.js # Logique JavaScript (contient des vulnérabilités)
├── package.json # Dépendance vers une version vulnérable de jQuery

---

## ⚠️ Vulnérabilités incluses

### 1. XSS (Cross-Site Scripting)
Injection directe de contenu non sécurisé dans `innerHTML` :
```js
document.getElementById("results").innerHTML = "You searched for: " + query;

### 2. Utilisation dangereuse de eval
Exécution directe de code entré par l'utilisateur :
eval(query);
