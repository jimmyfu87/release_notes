

    function show_description() {
        let request = new XMLHttpRequest();
        // define the parameter
        let organization = 'jimmyfu87'
        let project_name = 'release_notes'
        let workitems_id = '2'
        let endpoint = "https://dev.azure.com/" + organization + "/" + project_name +
            '/_apis/wit/workitems/' + workitems_id + '?api-version=7.1-preview.3'
        // person access token(PAT)
        let username = ''
        //pat key(這邊填入pat)
        let pat = "vwzrzbuj52qly43dedvktnc4einuk5s5q5ynpypq2azc2tzxpq7a"
        let base64_pat = btoa(username + ":" + pat)
        let basic_auth = 'Basic ' + base64_pat
        // set request and header
        request.open("GET", endpoint);
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader("Authorization", basic_auth);

        request.onload = function () {
            // transfer to json 
            let response = JSON.parse(request.responseText);
            let work_item_title = response["fields"]['System.Title']
            let work_item_description = response["fields"]['System.Description']
            let work_item_last_date = response["fields"]['System.ChangedDate'].substr(0, 10)
            
            let title = document.getElementById('item_title');
            let description = document.getElementById('item_description');
            let last_date = document.getElementById('last_date');
            title.innerHTML = work_item_title
            description.innerHTML = work_item_description
            last_date.innerHTML = 'Last Changed Date: ' +  work_item_last_date
            
            let work_item_comment_url = response["_links"]["workItemComments"]["href"]
            show_discussion(work_item_comment_url)
      

        }
        request.send();
    }

    function show_discussion(work_item_comment_url) {
        let request = new XMLHttpRequest();
        // define the parameter
        let endpoint = work_item_comment_url
        // person access token(PAT)
        let username = ''
        //pat key(這邊填入pat)
        let pat = "vwzrzbuj52qly43dedvktnc4einuk5s5q5ynpypq2azc2tzxpq7a"
        let base64_pat = btoa(username + ":" + pat)
        let basic_auth = 'Basic ' + base64_pat
        // set request and header
        request.open("GET", endpoint);
        request.setRequestHeader('Accept', 'application/json');
        request.setRequestHeader("Authorization", basic_auth);

        request.onload = function () {
            // transfer to json 
            let response = JSON.parse(request.responseText);
            let comments = response["comments"]
            let discussion = document.getElementById('item_discussion');
            for (let i = 0; i <= comments.length ; i++){
                let txt = document.createElement("p")
                txt.innerHTML = comments[i]["text"];
                discussion.insertAdjacentElement("beforeend", txt);
            }

           // discussion.innerHTML = all_comments
            // let last_date = document.getElementById('last_date');            
            // last_date.innerHTML = 'Last Changed Date: ' +  work_item_last_date
        }
        request.send();
    }



