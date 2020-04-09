import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
	console.log(data);
	return (
		<Layout>
			<div>My site's Files</div>
			<table>
				<thead>
					<tr>
						<th>relativePath</th>
						<th>prettySize</th>
						<th>extension</th>
						<th>birthtime</th>
					</tr>
				</thead>
				<tbody>
					{data.allFile.edges.map(({ node }) => (
						<tr key={node.id}>
							<td>{node.relativePath}</td>
							<td>{node.prettySize}</td>
							<td>{node.extension}</td>
							<td>{node.birthTime}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Layout>
	)
}

export const query = graphql`
	query {
		allFile {
			edges {
				node {
					id
					relativePath
          prettySize
          extension
          birthTime(fromNow: true)
				}
			}
		}
	}
`