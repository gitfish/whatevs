import React from "react";
import { observer } from "mobx-react-lite";
import { useQuery } from "../models/reactUtils";
import { MessageBar, MessageBarType } from "@fluentui/react/lib/MessageBar";
import { Spinner } from "@fluentui/react/lib/Spinner";

export const Home = observer(() => {
    const { error, loading, data } = useQuery(store => {
        return store.queryListBlogs({});
    });
    if(error) {
        return <MessageBar messageBarType={MessageBarType.error}>{error.message}</MessageBar>
    }
    if(loading) {
        return <Spinner />
    }
    const items = data?.listBlogs?.items;
    if(items && items.length > 0) {
        return (
            <ul>
                {items.map(item => {
                   return <li key={item.id}>{item.name}</li> 
                })}
            </ul>
        )
    }
    
    return <MessageBar messageBarType={MessageBarType.info}>No Blogs available</MessageBar>;
});