(function() {var implementors = {};
implementors["polars"] = [{"text":"impl&lt;T, '_&gt; Rem&lt;&amp;'_ ChunkedArray&lt;T&gt;&gt; for &amp;'_ ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Native: Rem&lt;Output = T::Native&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Rem&lt;ChunkedArray&lt;T&gt;&gt; for ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Native: Rem&lt;Output = T::Native&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N, '_&gt; Rem&lt;N&gt; for &amp;'_ ChunkedArray&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PolarsNumericType,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Native: NumCast,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: Num + ToPrimitive,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Native: Rem&lt;Output = T::Native&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'_, '_&gt; Rem&lt;&amp;'_ Series&gt; for &amp;'_ DataFrame","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; Rem&lt;&amp;'_ Series&gt; for DataFrame","synthetic":false,"types":[]},{"text":"impl Rem&lt;Expr&gt; for Expr","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; Rem&lt;&amp;'_ Series&gt; for &amp;'_ Series","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()