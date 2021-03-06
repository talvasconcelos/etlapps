/** @format */

export function makeSnippet(bannerId, width, height) {
  let cssId = 'b-' + parseInt(Math.random() * 0xffff)

  return `
<div id="${cssId}">
<style>
#${cssId} > a {
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 4px;
  padding: 2px 4px;
  text-decoration: none;
  position: relative;
}
#${cssId},
#${cssId} > a {
  width: ${width}px;
  height: ${height}px;
}
#${cssId} > a > img {
  width: 100%;
  height: 100%;
}
#${cssId} > a > a {
  text-decoration: none;
  background-color: white;
  padding: 4px;
  position: absolute;
  left: 0;
  top: -13px;
  margin: 0 auto;
  display: inline-block;
  font-size: 70%;
}
</style>
<script>
fetch(
  "https://etleneum.com/~/contract/cko001spd3/state/.current_ads.${bannerId}"
)
  .then(r => r.json())
  .then(({value: ad}) => {
    let s = document.getElementById('${cssId}')
    let a = document.createElement('a')
    let l = document.createElement('a')
    s.appendChild(a)
    a.appendChild(l)
    l.href = "https://banners.etleneum.com/#/${bannerId}"
    l.innerHTML = "advertisement"
    l.target = '_blank'

    if (!ad) {
      a.href = "https://banners.etleneum.com/#/${bannerId}"
      a.innerHTML = '' // placeholder
      return
    }

    let {text, image_url, link} = ad
    a.href = link
    if (image_url) {
      let c = document.createElement('img')
      c.src = image_url
      a.appendChild(c)
    } else {
      a.innerText = text
      a.style.display = 'flex'
      a.style.justifyContent = 'center'
      a.style.alignItems = 'center'
    }
  })
</script>
</div>
`
}
