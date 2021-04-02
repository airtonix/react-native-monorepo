---
inject: true
prepend: true
to: apps/<%= code %>/android/settings.gradle
skip_if: REPOROOT
---
def hereDir = System.getProperty("user.dir")
gradle.ext.repoRoot = new File("$hereDir/../../..").getCanonicalPath()
println "REPOROOT: $gradle.ext.repoRoot"
