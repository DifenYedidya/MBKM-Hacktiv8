// useEffect(() => {
//     fetch('http://192.168.1.5:4000/posts')
//     .then(res => console.log(res.json()))
//     .catch(err => console.log(err))
// }, []);


// const deleteFromState = (id) => {
//     let tmp = [...posts]
//     tmp.splice(id, 1)
//     setPosts(tmp)
// }

{/* <ScrollView>
{
posts.map((post, idx) => (
    <Posts 
        key={post.id} 
        post={post} 
        idx={idx}
        deleteFromState={deleteFromState} />
))
}
</ScrollView>  */}

// {isLoading ? <ActivityIndicator/> : (
//     <FlatList
//         style={styles.scroll}
//         data={data}
//         renderItem={({ item }) => (
//         <>
//             <View style={styles.box}>
//                 <Text style={styles.desName}>
//                     {item.id}
//                 </Text>
//                 <View style={styles.detail}>
//                     <Text style={[styles.desName, styles.bold]}>
//                         {item.title}
//                     </Text>
//                     <Text style={styles.desName}>
//                         {item.description}
//                     </Text>
//                 </View>     
//                 <View>
//                     <Button
//                         title='X'
//                         color='red'
//                         onPress={deletePost}
//                     />
//                 </View>         
//             </View>
//         </>
//         )}
//     />
// )}