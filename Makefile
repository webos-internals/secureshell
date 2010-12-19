package: clean
	palm-package package service .

test: package
	- palm-install -r org.webosinternals.secureshell
	palm-install org.webosinternals.secureshell_*.ipk
	palm-launch org.webosinternals.secureshell

clean:
	find . -name '*~' -delete
	rm -f ipkgtmp*.tar.gz org.webosinternals.secureshell_*.ipk
