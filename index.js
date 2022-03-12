  m4_if([$2], [], [dnl
    AC_CACHE_CHECK(whether $CXX supports C++$1 features by default,
		   ax_cv_cxx_compile_cxx$1,
      [AC_COMPILE_IFELSE([AC_LANG_SOURCE([_AX_CXX_COMPILE_STDCXX_testbody_$1])],
        [ax_cv_cxx_compile_cxx$1=yes],
        [ax_cv_cxx_compile_cxx$1=no])])
    if test x$ax_cv_cxx_compile_cxx$1 = xyes; then
      ac_success=yes
    fi])
  m4_if([$2], [noext], [], [dnl
  if test x$ac_success = xno; then
    for alternative in ${ax_cxx_compile_alternatives}; do
@@ -140,20 +153,31 @@ m4_define([_AX_CXX_COMPILE_STDCXX_testbody_11],
