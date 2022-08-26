import Head from 'next/head'
import Image from 'next/image'
import { AiFillGithub } from 'react-icons/ai';
import PM from '../../components/projectMenu.js'
import { getAllPostIds, getPostData } from '../projects';

export default function project ({ postData }) {

    return (
      <div>
        <p className="text-green-700 dark:text-gray-300 text-base m-2 "> Project Name </p>
        <p className="text-black dark:text-white font-bold lg:text-6xl text-3xl ml-2 mb-4"> {postData.name} </p>
        <div className="flex flex-wrap place-content-center mx-4">
          <div className="mr-4">
            <PM {...postData} className="w-[500px] h-[300px] mx-auto"/>
          </div>
          <div className="">
            <Image
              src={postData.image}
              layout="responsive"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    )
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.pid);
  return {
    props: {
      postData,
    },
  };
}
