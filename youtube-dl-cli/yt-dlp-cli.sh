yt-dlp -a "C:\Users\javiramoslab\Downloads\@youtube-dl\youtube.com\urls.txt" \
-o "C:\Users\javiramoslab\Downloads\@youtube-dl\youtube.com\Video\%(title)s-[@%(uploader)s]-%(id)s.%(ext)s" \
-f "bv*[height<=144]+ba[language^=es]/bv*[height<=144]+ba/b[height<=144]/b" --merge-output-format webm \
--write-info-json --write-description --write-thumbnail --add-metadata \
