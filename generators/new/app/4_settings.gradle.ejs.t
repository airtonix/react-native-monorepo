---
inject:
to: apps/<%= code %>/android/settings.gradle
after: rootProject.name
skip_if: REPOROOT
---
def hereDir = System.getProperty("user.dir")
gradle.ext.repoRoot = new File("$hereDir/../../..").getCanonicalPath()
println "REPOROOT: $gradle.ext.repoRoot"
