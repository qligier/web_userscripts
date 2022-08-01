// ==UserScript==
// @name        Oracle Javadoc JDK17
// @author      https://github.com/qligier/
// @namespace   qligier
// @match       https://docs.oracle.com/javase/7/*/docs/*
// @grant       none
// @version     20220801
// @require     https://raw.githubusercontent.com/YujiSoftware/JavaAPI-Redirector/master/search-index.js
// @updateURL   https://github.com/qligier/web_userscripts/raw/master/oracle-javadoc-jdk17.user.js
// ==/UserScript==

// Based on https://github.com/YujiSoftware/JavaAPI-Redirector
/* global packageSearchIndex:readonly */
/* global moduleSearchIndex:readonly */
/* global removedPackageFromJdk11:readonly */

(function () {
  'use strict';
  
  const paths = [
    { version: 6, language: "en", hasModule: false, prefix: "/javase/6/docs/api/" },
    { version: 7, language: "en", hasModule: false, prefix: "/javase/7/docs/api/" },
    { version: 8, language: "en", hasModule: false, prefix: "/javase/8/docs/api/" },
    { version: 9, language: "en", hasModule: false, prefix: "/javase/9/docs/api/" },
    { version: 10, language: "en", hasModule: false, prefix: "/javase/10/docs/api/" },
    { version: 11, language: "en", hasModule: true, prefix: "/en/java/javase/11/docs/api/" },
    { version: 12, language: "en", hasModule: true, prefix: "/en/java/javase/12/docs/api/" },
    { version: 13, language: "en", hasModule: true, prefix: "/en/java/javase/13/docs/api/" },
    { version: 14, language: "en", hasModule: true, prefix: "/en/java/javase/14/docs/api/" },
    { version: 15, language: "en", hasModule: true, prefix: "/en/java/javase/15/docs/api/" },
    { version: 16, language: "en", hasModule: true, prefix: "/en/java/javase/16/docs/api/" },
    { version: 17, language: "en", hasModule: true, prefix: "/en/java/javase/17/docs/api/" },
    { version: 18, language: "en", hasModule: true, prefix: "/en/java/javase/18/docs/api/" },
  ];
  
  let javadoc = {
    found: false,
    version: -1,
    language: "",
    module: null,
    route: "",
    hash: ""
  }
  let redirectTo = 17
  
  if(window.location.hostname === "docs.oracle.com") {
    const path = paths.find(p => window.location.pathname.startsWith(p.prefix))
    if (path !== undefined) {
      javadoc.found = true
      javadoc.version = path.version
      javadoc.language = path.language
      javadoc.hash = window.location.hash

      const route = window.location.pathname.substring(path.prefix.length)
      const components = route.split("/")
      if (path.hasModule && moduleSearchIndex.has(components[0])) {
        javadoc.module = components[0]
        javadoc.route = components.slice(1).join("/")
      } else {
        javadoc.route = route
      }
    }
  }
  
  if (javadoc.found) {
    // Do not redirect packages removed from JDK11
    // See: JEP 320 (Remove the Java EE and CORBA Modules)
    const packageName = javadoc.route.split(/\//g).slice(0, -1).join(".")
    if (removedPackageFromJdk11.has(packageName)) {
      redirectTo = Math.max(javadoc.version, 8)
    }

    if (javadoc.version == redirectTo) {
      return
    }

    const newPath = paths.find(p => p.version == redirectTo && p.language == javadoc.language)
    if (newPath.version >= 11) {
      let module = javadoc.module || packageSearchIndex[packageName] || ""
      if (module !== "") {
        module += "/"
      }
      window.location.replace(`https://docs.oracle.com${newPath.prefix}${module}${javadoc.route}${javadoc.hash}`)
    } else {
      window.location.replace(`https://docs.oracle.com${newPath.prefix}${javadoc.route}${javadoc.hash}`)
    }
  }
})()
