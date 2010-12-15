package: clean
	palm-package .

test: package
	- palm-install -r org.webosinternals.weboshell
	palm-install org.webosinternals.weboshell_*.ipk
	palm-launch org.webosinternals.weboshell

clean:
	find . -name '*~' -delete
	rm -f ipkgtmp*.tar.gz org.webosinternals.weboshell_*.ipk
