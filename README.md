# release_notes

直接用瀏覽器打開index.html按Display Markdown File即可顯示

程式22行透過onclick="display_md();" 呼叫Ajax(39-75行)
因不清楚怎麼參數的方法, 這邊目前是使用hardcode形式寫死, 後續要使用參數可以透過display_md()的method去塞

52行是金鑰(PAT(Personal Access Token))要自行去申請，可以參考
http://dog0416.blogspot.com/2019/06/azure-devops-azure-devops-services-rest.html

68行目前是直接採用"<pre>"字串改成<pre class="prettyprint linenums">讓程式碼產生框框, 不確定後續是否<pre>的字串會產生問題,讓框框有可能會跑不出來
