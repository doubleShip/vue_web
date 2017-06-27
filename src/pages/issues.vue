<template>
    <div class="l-container">
        <issues-list
            v-for="issuesItem in issuesListInfo"
            :key="issuesItem.id"
            :issue_content_title=issuesItem.issue_content_title
            :issue_header_meta=issuesItem.issue_header_meta
            :issue_content_list=issuesItem.issue_content_list>

        </issues-list>
    </div>
</template>

<script>
import IssuesList from 'components/issuesList';

export default {

    created() {
        console.log('=====>',this.CONFIG.HTTP_SERVER.getMusicList.url.formatHttpUrl({typeId:2}))
//        this.axios({
//            url: this.CONFIG.HTTP_SERVER.getSignInfo.url,
//            method: this.CONFIG.HTTP_SERVER.getSignInfo.method,
//            isShowLoading: true
//        })
//        .then((response) => {
//            this.issuesListInfo = response.data;
//        })
    },
    components: {
        IssuesList
    },
    data() {
        return {
            issuesListInfo: []
        };
    }
};
</script>

<style>

</style>
