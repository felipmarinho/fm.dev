import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
	<Layout>
		<Header headerText="My Time Line" />
		<Timeline lineColor={'#ddd'}>
			<TimelineItem
				key="001"
				dateText="12/2019 – Present"
				style={{ color: '#76bb7f' }}
				dateInnerStyle={{ background: '#76bb7f', color: '#000' }}
				// style={{ color: '#e86971' }}
			>
				<h3>Stefanini Consultoria</h3>
				<h4>Full stack developer</h4>
				<h5>inLira</h5>
				<p>
				I am responsible for building front-end of system. It is developing at react.js. The system helps the owner to sell 
				</p>
				<h5>SCE - Stefanini Consumer Experience</h5>
				<p>
				I am responsible for building front-end of system. It is developing at react.js. The system helps the owner to sell 
				</p>
			</TimelineItem>
			<TimelineItem
				key="002"
				dateText="02/2019 – 12/2019"
				dateInnerStyle={{ background: '#CA7945', color: '#000' }}
				bodyContainerStyle={{
					background: '#ddd',
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
				}}
			>
				<h3 style={{ color: '#CA7945' }}>Title, Company</h3>
				<h4 style={{ color: '#CA7945' }}>Subtitle</h4>
				<p>
					Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
					exercitation. Veniam velit adipisicing anim excepteur nostrud magna
					nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
					reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
					est.
				</p>
				<p>
					Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
					exercitation. Veniam velit adipisicing anim excepteur nostrud magna
					nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
					reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
					est.
				</p>
			</TimelineItem>
			<TimelineItem
				key="003"
				dateComponent={(
					<div
						style={{
							display: 'block',
							float: 'left',
							padding: '10px',
							background: 'rgb(150, 150, 150)',
							color: '#fff',
						}}
					>
						11/2008 – 04/2009
					</div>
				)}
			>
				<h3>Title, Company</h3>
				<h4>Subtitle</h4>
				<p>
					Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
					exercitation. Veniam velit adipisicing anim excepteur nostrud magna
					nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
					reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
					est.
				</p>
				<p>
					Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
					exercitation. Veniam velit adipisicing anim excepteur nostrud magna
					nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
					reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
					est.
				</p>
				<p>
					Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
					exercitation. Veniam velit adipisicing anim excepteur nostrud magna
					nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
					reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
					est.
				</p>
			</TimelineItem>
			<TimelineItem
				key="004"
				dateText="01/2019 - 12/2019 - online"
				dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
			>
				<h3>Go Stack Bootcamp Node.js, ReactJS e React Native</h3>
				<h4>Rocketseat</h4>
				<br />
				<h5>Intermediate Level</h5>
				<p>
					Description about the jobs
				</p>
			</TimelineItem>
			<TimelineItem
				key="004"
				dateText="02/2019 – 12/2019"
				dateInnerStyle={{ background: '#e86971', color: '#FFF' }}
			>
				<h3>Globalweb</h3>
				<h4>Systems Analyst</h4>
				<br />
				<h5>procomites</h5>
				<p>
					Description about the jobs
				</p>
				<h5>GDH</h5>
				<p>
					Client ANA - Agência Nacional de Águas - I was working on a project called GDH. This project is responsible to know the amount of water in the rivers of the northeastern semi-arid region on Brazil. I was responsible for maintaining, fix bugs and develop new features on both platforms WEB and mobile.
				</p>
			</TimelineItem>
			<TimelineItem
				key="004"
				dateText="09/2018 – 12/2018"
				dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
			>
				<h3>VanWest College - Vancouver, BC - Canadá</h3>
				<h4>English course</h4>
				<br />
				<h5>Intermediate Level</h5>
				<p>
					Description about the jobs
				</p>
			</TimelineItem>
			<TimelineItem
				key="005"
				dateText="05/2017 – 08/2018"
				dateInnerStyle={{ background: '#e86971', color: '#FFF' }}
			>
				<h3>Basis Tecnologia da Informação S.A.</h3>
				<h4>Java developer</h4>
				<br />
				<h5>procomites</h5>
				<p>
					Description about the jobs
				</p>
				<h5>GDH</h5>
				<p>
					Client ANA - Agência Nacional de Águas - I was working on a project called GDH. This project is responsible to know the amount of water in the rivers of the northeastern semi-arid region on Brazil. I was responsible for maintaining, fix bugs and develop new features on both platforms WEB and mobile.
				</p>
			</TimelineItem>
			<TimelineItem
				key="006"
				dateText="03/2014 – 09/2015"
				dateInnerStyle={{ background: '#e86971', color: '#FFF' }}
			>
				<h3>AIS TECNOLOGIA DA INFORMAÇÃO</h3>
				<h4>iOS App Developer</h4>
				<br />
				<h5>App Wise</h5>
				<p>
					I was responsible for improvements and fixes. I helped with the change for the app to begin using Core Data. I helped too for the interface can use the library of the interface of other companies.
				</p>
				<h5>App Coletor</h5>
				<p>
				I developed this app using Swift and Core data for the persistence. This app had the finality to collect information and send for a web platform. This collect could happen of two way take, first, you can take a picture and second, record audio and both of the possibilities you send localization. This app went to App Store.
				</p>
				<h5>Client FGV</h5>
				<p>
				I developed this app using Swift and Core data for the persistence. This app has the finality to help the researcher understand in the development of the regions of Brazil. Your interface was all customized. And the app was integrated the web system.
				</p>
			</TimelineItem>
			<TimelineItem
				key="007"
				dateText="10/2012 – 02/2013"
				dateInnerStyle={{ background: '#e86971', color: '#FFF' }}
			>
				<h3>Huge Inc.</h3>
				<h4>iOS App Developer</h4>
				<br />
				<h5>Vale investidores</h5>
				<p>I was responsible for interfaces improvements, to resize the elements for display in the portrait and landscape using only code line.</p>
				<h5>Mankind - History Channel</h5>
				<p>I was responsible for internationalization of the app.</p>
			</TimelineItem>
			<TimelineItem
				key="008"
				dateText="05/2012 – 09/2012"
				dateInnerStyle={{ background: '#e86971', color: '#FFF' }}
			>
				<h3>Adjetiva</h3>
				<h4>iOS App Developer</h4>
				<br />
				<h5>App Vale investidores</h5>
				<p>I was responsible for interfaces improvements, to resize the elements for display in the portrait and landscape using only code line.</p>
			</TimelineItem>
			<TimelineItem
				key="004"
				dateText="04/2012 – 05/2012"
				dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
			>
				<h3>IAI – Instituto de Artes Interativas</h3>
				<h4>iOS Developer Advanced – 45 hours</h4>
				<h4>iOS Developer – 45 hours</h4>
				<h4>Objective-C – 15 hours</h4>
			</TimelineItem>
			<TimelineItem
				key="009"
				dateText="09/2010 – 04/2012"
				dateInnerStyle={{ background: '#e86971', color: '#FFF' }}
			>
				<h3>Algar Tecnologia</h3>
				<h4>Java Developer</h4>
				<br />
				<h5>SightWeb</h5>
				<p>
 This is a tool for integrating the management of people and payroll with the focus in the management of people and management per competition.</p>
			</TimelineItem>
			<TimelineItem
				key="004"
				dateText="01/2009 – 08/2011"
				dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
			>
				<h3>Analysis and systems development</h3>
				<h4>Universidade Católica de Brasília – UCB</h4>
				<br />
				<h5>Intermediate Level</h5>
				<p>
					Description about the jobs
				</p>
			</TimelineItem>
		</Timeline>
	</Layout>
)







//https://reactjsexample.com/a-vertical-timeline-component-for-react/
