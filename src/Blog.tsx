import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from 'apollo-boost';
import { listBlogs } from "./graphql/queries";
import { ListBlogsQuery } from "./API";

export interface IBlogListProps {
    data: ListBlogsQuery;
}

export interface IBlogListItemProps extends IBlogListProps {
    item: any;
}

export const BlogListItem = (props: IBlogListItemProps) => {
    return null;
};

export const BlogList = (props: IBlogListProps) => {
    const { data } = props;
    const items = data?.listBlogs?.items;
    if(items && items.length > 0) {
        const itemViews = items.map(item => {
            return <BlogListItem key={item?.id} {...props} item={item} />;
        });
        return (
            <>
                {itemViews}
            </>
        )
    }
    return null;
};

export const BlogListContainer = () => {
    const { loading, error, data } = useQuery(gql(listBlogs));

    if(loading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>Error: {error.message}</div>
    }
    return <BlogList data={data as ListBlogsQuery} />;
};