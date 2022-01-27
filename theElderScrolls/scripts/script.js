const images = [[0,'./public/galery/img1.jpg'], [1,'./public/galery/img2.jpg'], [2,'./public/galery/img3.jpg'], [3,'./public/galery/img4.jpg'], [4,'./public/galery/img5.jpg'], [5,'./public/galery/img6.jpg']]
const videos = [[0,"https://www.youtube.com/embed/t-_56Ouy8II",'./public/galery/vid1.jpg'], [1,"https://www.youtube.com/embed/IaskxKfeFno",'./public/galery/vid2.jpg'],[2,"https://www.youtube.com/embed/mQ9KAggC728",'./public/galery/vid3.jpg'], [3,"https://www.youtube.com/embed/pF2Qw9BI6Rg",'./public/galery/vid4.jpg'],
                [4,"https://www.youtube.com/embed/JSRtYpNRoN0",'./public/galery/vid5.jpg'],[5,"https://www.youtube.com/embed/fn0N294NFy0",'./public/galery/vid6.jpg']]
let allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

function renderImages(){
 let container = document.querySelector('.galeryFiles')
 container.innerHTML = ''
  images.forEach(item => {
        let tagImg = document.createElement('img')
        
        tagImg.setAttribute('src', item[1] )
        tagImg.setAttribute('class', 'gaImag' )
        tagImg.addEventListener('click', e => {
            e.preventDefault()
            emphasisPosition(e, 'image', item[0])
        })
        container.appendChild(tagImg)
    })
    
}

function renderVideos(){
    let container = document.querySelector('.galeryFiles')
    container.innerHTML = ''
    
    videos.forEach(item => {
        let tagVideo = document.createElement('img')
        tagVideo.setAttribute('src', item[2])
        tagVideo.setAttribute('class', 'gaVideo')
        tagVideo.addEventListener('click', e => {
            e.preventDefault()
            console.log('Video')
            emphasisPosition(e, 'video', item[0])
        })
        container.appendChild(tagVideo)
    })

}

function emphasisPosition(e, type, id){
    let emphasis = document.querySelector('.renderMidia')
    
    if(type === 'image'){
       let item = document.createElement('img')
        item.setAttribute('src', images[id][1])
        item.setAttribute('class', 'renderImage')
        emphasis.innerHTML = ''
        emphasis.appendChild(item)
    }else{
        let emphasis = document.querySelector('.renderMidia')
        let tagVideo = document.createElement('iframe')
        tagVideo.setAttribute('src', videos[id][1])
        tagVideo.setAttribute('allow', allow)
        tagVideo.setAttribute('allowfullscreen', '')
        tagVideo.setAttribute('frameborder', '0')
        tagVideo.setAttribute('class', 'renderVideo')
        emphasis.innerHTML = ''
        emphasis.appendChild(tagVideo)

    }
    
}



