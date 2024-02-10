function showalert(m,t){
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const appendAlert = (message, type) => {
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible " role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
  
      alertPlaceholder.append(wrapper)
    }
    appendAlert(m, t)
    setTimeout(() => {
      const alert = bootstrap.Alert.getOrCreateInstance('#liveAlertPlaceholder')
      alert.close()
      document.getElementById("saveAlertContainer").innerHTML="<div id='liveAlertPlaceholder' class='fade show'></div>"
    }, 3000);
    
    
  }