int=100000
while(( $int<=200000 ))
do
        curl 'http://5sing.kugou.com/subject/api/like/dolike' -H 'Cookie: 5sing_auth='$RANDOM';' --data 'sid=ezLQyllzUGc%3D&signup_id=14230&library=2' --compressed
        echo $RANDOM
        let "int++"
        sleep 5
done

#dGHBCOJ1a+SkxkLkVBj8NoVJn2coVH78KwRSn9hjaWY0hW3Gj/NeYQ==
