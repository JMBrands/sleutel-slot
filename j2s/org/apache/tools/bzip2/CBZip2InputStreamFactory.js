Clazz.declarePackage ("org.apache.tools.bzip2");
Clazz.load (null, "org.apache.tools.bzip2.CBZip2InputStreamFactory", ["org.apache.tools.bzip2.CBZip2InputStream"], function () {
var c$ = Clazz.declareType (org.apache.tools.bzip2, "CBZip2InputStreamFactory");
Clazz.defineMethod (c$, "getStream", 
function (is) {
is.read ( Clazz.newByteArray (2, 0), 0, 2);
return  new org.apache.tools.bzip2.CBZip2InputStream (is);
}, "java.io.InputStream");
});
;//5.0.1-v2 Sat Nov 25 17:51:22 CST 2023
