import React, { useState, createContext, useContext } from "react";



const BlogContext = createContext({
  blogs: {},
  setBlogs: () => {},
});
export const useBlog = () => useContext(BlogContext);


const BlogProvider = (props) => {
  const [blogs, setBlogs] = useState({
    "-MrqbN8cBQ0rw3VrdAxY": {
      id: 1,
      title: "Jared",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHwSURBVDjLpZM9a1RBFIafM/fevfcmC7uQjWEjUZKAYBHEVEb/gIWFjVVSWEj6gI0/wt8gprPQykIsTP5BQLAIhBVBzRf52Gw22bk7c8YiZslugggZppuZ55z3nfdICIHrrBhg+ePaa1WZPyk0s+6KWwM1khiyhDcvns4uxQAaZOHJo4nRLMtEJPpnxY6Cd10+fNl4DpwBTqymaZrJ8uoBHfZoyTqTYzvkSRMXlP2jnG8bFYbCXWJGePlsEq8iPQmFA2MijEBhtpis7ZCWftC0LZx3xGnK1ESd741hqqUaqgMeAChgjGDDLqXkgMPTJtZ3KJzDhTZpmtK2OSO5IRB6xvQDRAhOsb5Lx1lOu5ZCHV4B6RLUExvh4s+ZntHhDJAxSqs9TCDBqsc6j0iJdqtMuTROFBkIcllCCGcSytFNfm1tU8k2GRo2pOI43h9ie6tOvTJFbORyDsJFQHKD8fw+P9dWqJZ/I96TdEa5Nb1AOavjVfti0dfB+t4iXhWvyh27y9zEbRRobG7z6fgVeqSoKvB5oIMQEODx7FLvIJo55KS9R7b5ldrDReajpC+Z5z7GAHJFXn1exedVbG36ijwOmJgl0kS7lXtjD0DkLyqc70uPnSuIIwk9QCmWd+9XGnOFDzP/M5xxBInhLYBcd5z/AAZv2pOvFcS/AAAAAElFTkSuQmCC",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsam voluptates ea quod incidunt voluptas illo placeat minus voluptatem commodi temporibus. A eum incidunt dicta nesciunt ut quis rem possimus asperiores, exercitationem perspiciatis? Repudiandae quibusdam quos impedit harum nam itaque voluptatem expedita laudantium totam adipisci architecto, consequuntur eum ullam aspernatur magnam porro tenetur sequi in odit vero voluptates mollitia non dolorum autem! Corporis tenetur exercitationem aperiam ratione reiciendis! Corrupti culpa, vero id officiis deserunt dolorem officia tenetur molestias minus neque odio. Pariatur laudantium explicabo qui minus dolores quae provident rem asperiores possimus nostrum a accusamus incidunt doloremque vitae, nesciunt ab eius deleniti. Neque quidem illum quae dicta quibusdam sit omnis reprehenderit fugit, dolorum id atque! Consequatur praesentium deserunt laudantium fugiat molestias vel aliquid, laborum ipsa esse ea quis provident debitis nam amet distinctio facere omnis laboriosam repellendus inventore explicabo nobis unde. Quaerat, eum aliquid! Laudantium voluptatem doloribus, cum harum, delectus nihil minima porro facere iusto vel dicta adipisci recusandae, corporis facilis architecto aspernatur dignissimos tempore maiores! Harum tempore eligendi asperiores deleniti nemo obcaecati at natus aut fugiat rerum, in, consectetur, quisquam dolores sint id provident? Quas nemo suscipit reprehenderit, blanditiis, earum alias quasi voluptas enim eum commodi facilis quo corrupti officiis labore ",
    },
    "-MrqbN8d2fZzrA8jx0uO": {
      id: 2,
      title: "Kellie",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIOSURBVDjLpZM7aFRhEIW/m73r5gWB9UFEzAMsjIIIgkViFzFgJbHR0kqI2Ahi7KzsrEWwCQZsBFFIExWCqJWKClppEDTxEVCym73/a/75LW7AFIksOOXA+eacA5OllPifyTdbTt9dSVEVLxCj4kVxosxM7c3aAjivHNvfjaiiCSQmHrxstO/ABMVHZWVVCDHR11VhzWj7gJYRvCg2KBITLu+gaWRzQLp6uWxRlRSEFIRi+ArOJ2xIBFE6q5GGjf9wMH4cVMliJIuR5lvFScK4SIjQVU00toqQgpCJwOtXIAEOHWbNeGxQCl9GsNsyxIQtAM6XAGchCARh1SVcUIxTQkz01hRtKRefnEvBC94Hgg04F8jVOjpEwDoIAbxnraVYnzBe8bHs4pTc4/TMU+LyF6Rex41OcLv2jVzN+mXnwHsQQUwoHawD9n28w9jgAgfGL1AbPoh5N8+HZ48ZwdChhS2FxoC1EALaUqwvAcYre97fYmR8ks5PC2QzZ+levM/QQJ0jn7+Sp8LAxggiqFHMBgd9zSU6+4fh5KW/5V3bTb0I5FqYUjg6BjGCCMkIXhL9fVVEodGzi+LNHD0Pp3DmOwXQbFT4XcvJb9ROoLM/SU5IIZJCRHsjc7PL4JUUhZ3bJ+l/Mc/Qji7ySpXmirD4o4NH7ihZu+/8/MzAdOvX8vlKzAZjJS0luDkxL9f/ALqCe8YKiajkAAAAAElFTkSuQmCC",
      description: "Schmidt-Sporer",
    },
    "-MrqbN8fg2y5a9OISruD": {
      id: 3,
      title: "Mendie",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALCSURBVDjLjZP/SxNxGMf9B/QfiVB/ytCaoS7MDEoMYlgswi+FkzQsjNZQNKX1g0s3ZkTppuB+smJSOnOiGTa1lLHt5rZ0c05trX29fblt7+5zdJIK0cHD57mHz+t1z3P3uRwAOX/H4uJisdFoHJienl7V6/U/JiYmful0Okqr1apGNarSo/sPEpPJlMvCShZOud1uBAIBhMNhxGIxhEIhWK0WqAa7GbWySzOg6M07JPgDv3c6nchms4jH4yCSra0t+P1+pNNpZNM0GJqC0TCGp33353ufPMo7EJAnEziVSoFcDMOA3DscDgSDQU6apHeQiFqQSWxgavI1Oh83azgBCxexbWei0SgHRCIRTuL1emGz2UDq6TSDWMiGZNTKdZFio/VuY+Ze253iHBZWejwekKAoioPIzETk8/m4PJkIsQIzC7rZ/CfbYRLz8/NoaGhQ5hQUFOB/orCwAL6FZ/BONcG3rIHL5YJYLP7GCcxmM+x2OxYWFjAyMsIBZN3e3ubqJO8QnYR/qQVMZAm+GTE2l99AJBL5OQHZxENEQoLU+Lp9dhB7xjowQQ2CZhn8n6Vwjl5Fe11Z5JiABA/zdce7ZiQD40jsSJHYHUJwTQraLcP6QGnm2Ai8iKz8CLMvGxF19oHevI24uw309xug7bVYkp5O/fMlXqnIh6H/HFbHLiJMXQe9cQlxpwgxG4Hz0VNzQsodJIVCoZybm8NukP2U3nVYtr7C8mkAdl0t26oaMUcNaEqIlednsSYXwtQtQMvlU4aDkyiXy3O7ejoN42+1cO1bOYlLL2ZnHkZ4vQi05TxWVGwnk8N4NaRClbDso0AgyD30M8lkstwHD9tfNEnqmYkPOjgnbyK514MYVY3lwVIM97ei8kJlqry8XMnDhwR8SCTNJfVNt9RDHRX7X9TC7ExPSUZy7YynqrpSzcLFR/f/BmKF4lxymSkBAAAAAElFTkSuQmCC",
      description: "Kling, Gleichner and Stamm",
    },
    "-MrqbN8gY3USZtH6qa-6": {
      id: 4,
      title: "Lindi",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJCSURBVDjLjZPNTxNBGIerBy/eOAgmYoz/gCYoJ/XgxZsxnrygFw8eJJGDiQc0MZEElFBL2igkoBBEFLUWaYNQiB+gKd1WbVKUCgVp2O3H2N3tfvYDf+5s7KbGNjLJc5r5PTPvm3ltNpttn0GTQfN/OGCwE4CtErqadF0XisXiVqlUQjWMfTidTkc1CV3NNCzLMhRFsRBFETzPI5VKmRKO4+ByuUyJt6dub3D0qG+ut8FuCugBTdOQz+ehqBoERYMkSRAEAel02hSoqgp6ycO+mwPR2asRMTGCWcdBxRLQcELUEE6qWGRlsKKCXC6HTCZjlaKKCfxg7NDIBD6PH8fL63sclsAoA1GiY35TxfuEjDAnW6UQQsBuRLH6sRN53guOaYHnRn3/+LX6XZaAEud1TK9LeL2WQ4hTzOZRCeG+Ih7ogp59hdSXC3jSvp8ZutJQZzWxLFjJavAs83B/yyIp5c1XiSSGtUC3GSZLF/Hm3gmcOrT7rJHb8Y/AHxcwFsnAvUTwkyQRDU9hefq88ewXEFcuG007jPTaJ/z5F38LYkTFcDiJwUUWUwEGfu8YfO77mBk4g5jvJIKPjmGVmTAvqioIbebQ92EDdl8Q3UPP4Z9fAJsIg1l4Cs/d04jO9Zs9qSnISLoRDqFjeBK93ghuPQ7iXMdbtPVMIsWuo1AomNQUUNpuP0Br1wgudT5DS/soWu/M4B3z3WxmmVqCX7XmoApbNFM5C0eMX6jQje2EjbMSHcBKQSOVbGOcy9DRbywLfgOaoblOxI0zHQAAAABJRU5ErkJggg==",
      description: "Raynor LLC",
    },
    "-MrqbN8hOcP9M1SCsE2p": {
      id: 5,
      title: "Annette",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALKSURBVDjLldNbaJt1HMbx73tok7Q5tukhmzXNShuHXgwvlIEIgpp5pgqiIN5PUPBw4RClKjjwxhvZcDeCeKEgu1mKMUWYVFQUPFRZOrtmW0zWxKZdm3fNm/f0/3nVguIm/u6fz83veTQR4f/cSjFf9FwpWM2geOdzq7PmfwbO5EcUjOgaV5TIy2E99lAqPERtc/VhgBsC1VL+AzQeEJ+EpyQaiyT1+vm2oFyt60jpukC1lJ9WwlI8Uwgn9j+GJgH2HyXctZ+JRzyturY19/jbF9/8V6Bayj9hhIc/i4/Nkkjfhl0/RbDTxmu3EC1KenKY2p9bTwN/B6qlfAb4KJK+/d7YyCx9hoN9+X2UY6NcBz0SRnwbzCFGo+bUbs68MJ+f1g2+CnzGU5NPacmJR3A3vsC6soiybfyeg73dJdQv9JuCBIJlK7UH+I6cTE8fysRHjxA4K3jNE+jeNuK5dDYsvB0Xr+dhJjUwTFSg2N5RrT3As+RgaDCNs9Ng+dsi/f2KPokSAuKJPmprFoYIhmjogzfT63RxXPl+F9Dta2q+WfkV33cZGJiiXonTbA1wqbZO91qPqVuimLpis+Lx+4c/sXLiOxJLjbvL95uvAmgiwuJ7B76JZVKHp+44wpenihSOPou91eaHcpGU0WHIN+mujzBzz5OEcrdiL5U5t7gQXF2uvKjtVnnh+IHz8X3JGdQMo9mbGM8lqJ+r8PmnRQ5edbjr6HEiq2eh8TUkkrTNLD+WFy/uvfG+Y9X8mbnc6cHE8uyFzcv8smAxlh3DVILeVYTHc/DgS3t9MecyGEqb1P45ptOv5QqIlDLZFBOH9mMGPr+9e5bDjz7DYG0ex27SBayOwfIqDe16a/zklcm3UPL66L4YqY6P11RMDPmYeh1r3edSywi8nryh3WjOH7+QNVxHjnkezw87Eh3YaGkhT8KBIQ2Bk4Wy/85fhGJYxwKt7REAAAAASUVORK5CYII=",
      description: "Mann-Kulas",
    },
    "-MrqbN8l-247bFsOFjdP": {
      id: 6,
      title: "Shaine",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAK7SURBVDjLbZFNaJxlEICfeb+vu5tYCApd3CgsdLdpu9pWEKEUEaEUb4o5iBQpePCkHqwQqlKLB6sUDyLoQbBC0IoI4g8iKv5SSlpj2qYmWtgapCaSiGY3m9399nt33vGwydaoAwNzmOcZZkbMjENPn8rsGhm+EseSOz87Xx4/frDO/8Q9Dzw7tOPWrdVGo5XMTk+WJj47mYqZAWyQfD/9a/nUiUMbJPtHjwyN3FKqNlutZPbCudLkl2+nAH0BwENPvZWpbN1yBbPc2bOz5Q/fOFwHuPu+J4bKO7dVW8128tOlc6Xz37ybrjMbBAD3P/JKZvtIoaqhO/DDxFQ5TVuMVLZXm6vt9s8zk+WL372X/rNfzIyxsbHngGfWZWZGPp+PAFSVEAKLi4tqZpgZqkqz2Xx+fHz8WLwGHC0/+IL8+2hmoAYhGKGt0fyKp61gwPLJg0eBYw5gcHBQ8tcJTv4Ld9VYqHuu1j3dIEQCDvDeC/RqzIxcDDduFmJ3DU5S5WotpZEGIhEi1wOcCKpKX+C9x2sPvD4niPTgP1a7WGANFhyCE8EZfUEMkKYpaQDWJmfEqCcKCCKGA6z2CdHKpyTJMu0kxRWa1wSqilcIBhoCDR8YzDi8Gs5BZ+l9tgx8xe133cHNN2zj65kPmBj4jb2PDb/kALrdLh010q6xmhoaentuisBMWFl4h9t27EGdsqdwABXP3l37AB516ys0O0a9Y9QTY7UDLW+oCSbwV+N3Nslm7t35OABP7n+dUn43QC4GyGaz1L44wdzcHMcvX+ZwsYj3nkqlwo9TUywX/2Rm4QwXF05z5MCbvPj5w+SiLEAS97/gPYVCgZfzeW5SRVWp1WoUi0VcWGFi+gz7dt/Jx5deIyMxpy98C/CqmBmjo6O2tLRECKGfZrahjooN4uEEiQxTwc9nmfroF/kb8GeNaWNAJ70AAAAASUVORK5CYII=",
      description: "Ullrich-Hermann",
    },
    "-MrqbN8mN3Dkij2FDafD": {
      id: 7,
      title: "Casandra",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAB3SURBVCjPY/jPgB8yDCYFh/7v/b/1/9r/i//P/N/3DYuCvV/3/j/4f8//Hf8X/m8+j0XBVom1X9YDzVjwv/lbpSJWNyyWmPl9DUhaDosb1mYvPjvzbN/G5h+Vm/NXpq/EYsLMX31/mv9U/sn/k/4n/s8gDUlcEAA/mhEkVy1MFgAAAABJRU5ErkJggg==",
      description: "Upton-Kreiger",
    },
    "-MrqbN8on9U1sH4u1StL": {
      id: 8,
      title: "Abeu",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMDSURBVBgZpcFNaJt1HMDx7/PkSdombdO0Tedo2q6H2VSnlZXBylAUN/HiRRBksNsQ8eLNsyBFL9tJUA+CMnUiXmSbgqOjgyF9YVu3pmvarG+sa+eatmmb5snz8v/9zA4Dkd38fCxV5f9w3h2+0pJpb7zeHI9lUAtUMKqYIMDzAoIgwK96eJ5H6HqYqovvViltbK+tzC6edHo6mqaHXuzK9B5o5QlR5QkjiohiVDFGMKIYYzCiBMZwa+pe66i3O+t0tiUy6XiE+ZVHhMZwc3qZ44NZJm/P88qRbsJAuJ1bpr//EDduTNN1qANjhOczSdLPHUw5lgWiSjRisVUWKqFFxUTZqgRcGytgjCBq49OAZ8XYLO7Sk0kRimBZFtanF/5SO3SxRbHsCENH+9j2YxgRjCgiEBohFKHZqTAyMolX3iT0AzYe7uKMz6ycyab1i7ZkIpJOZw5EYg3WWmGWtUeb+KEhDA3GCKFRzmTzfPjCEpNL9Q+uLGaK92cnzqOqqCofnbv00/dXczq+sKf5v43+1+UfPtfi+Mca7I3r8u+n/ZvDh99WVSxV5b3Pfuvu70zOnRjM1ifijfR2xOlM2jy1c+9X/OIlUgOn2F9dINwTdu7frcxN3jkbGd3LWnZl/+obx/t64vEmYrEYPW1R6hyLp3ZyF2gZeA1x8ziJTsTfpSV7MBopbZ+0R8+9r9n+3sFUS4r1UoARoSFq8W+RRIZgexnxi6g/R6x5BaozlNe9iENN1Rd7vVhiYX2fqtfOyNgMbtUnZZZ5MzlCY5PQ3WJhSwnsJjTwyV0s6Nxc6QOHmjAICIzghyH5xVWMKIdlgmN1Y7z86inU/xPL7HHncgVT3iVm23ybHwi/+fm7iw41Vd/HdX262uswoYOo8rrm6DvxDn7xKxwnSe6az/X9t6i0H8WtuBTcW0KNQ83SVC5febyRjdYnEBMiIgwdCbAiD4nUpZn6Y4cf777EA00ihQLVcpnHq6tfUmOpKs8ycf7YcGNr6mxla9+dn9/45PTX87/wDP8ABifE0eTdPioAAAAASUVORK5CYII=",
      description: "Cassin-Steuber",
    },
    "-MrqbN8pZfx2TJB70mVG": {
      id: 9,
      title: "Dollie",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACzSURBVDjL7dI9C0FxHMXx8zruG2SSUjKgXwklw2WxSB4yGC2iDFyDpwj1T1LK00jq+hduOt6AwU02w1k/deoLkvhm+APvAVRpoEpBxVEoaoX8SZDbG24AkcWTrZ3D+ubByPBCmEv5HCjfVXPrMNq/0WdpZuaaSI3U50DhomrrG/2WpqdzZWJiE7G2CyB3lPDgTHOmGR/bDHUPRLDk4kJ2ZSA9FSR7CtJQCOQF3rjxL/FHwAu8X+2ABKJChQAAAABJRU5ErkJggg==",
      description: "Harris, Reinger and Effertz",
    },
    "-MrqbN8pZfx2TJB70mVH": {
      id: 10,
      title: "Heath",
      picture:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAMPSURBVDjLpZPba5tlAMZ/75cvadOmzdI2jTNp03TDJM457fAwmYeLyUBU2EBRmBfzwgvFK/0DBBF2oxc68MKK4EAKiqBUGV60qY4yWbVh2cza0nXFmqQ5NS1pvuP7fl50ThG88vkDngM/HuF5Hv9H+un3vtuXGArN9fcEEngCPIX0PKTjYFkOjuNgmxaWZeEaFtI0sA2TVm2rtF68eUJPDvcVjh0aSaRiAwCo242k8lDK2zOTCqk8pJRI5eFIya/53wZy1k5Rjw/2JqI9PpbXK7hS8kvhFo8ezXBlcZkH7hvFdRSL126RzY5x6VKBkbFhpFTckwgTvWt/RBdiL9XvEzTbio4r6Eg/zY7DzOUVpFQoT8MmiCUCNOo7JBMRXKUQQiDeuTDvaa6BpjyE5uPYRJotO4BU6vYMcKXCVYqknCVRmcYXOsxufY4vF+PoP19ffyUT9c4Nhnt90Wgi5gsERWmlSKnSwHYlriuRUpHuX+RQWhI8fIZw6kFaa2lO1ie3xV8Y3/hg+otH7k+9nBlPEg71kB7W7qDqlL/HaF6hLzxBc3WJ8OABAn3DFGc/N3WAF979ZjQbD5+KRQexJYS6/uZs1n/Eal4mMn4SqzxFoEewnr+BY9oN02g/pj311pQwmq2vMqlYN0IHodHfLfaSN3MYlYuEDzyDWfoE4d/CH+rD61T48Ifg1ENvfr2s5d5/yctkU0cj+yKUWw5SKYJ+QaX4LTu/XyR88HnMPz5G8zvYO2OU5vLMhl5nxUgdB9ABTFtp5XqL1fIupjVEfmaSE2Mlsk8+h12ZxBfwMLeTlOYW+Mw8i7QFmrajA2gAruPgSIXtumwuXODpZA1JnHLhIxQmu804a7mrnN86w8ZuD7om0AOBg/9oYGMYNiNDXeyv57j3+KcsTb3N8k/zdI0eYbdRphB9jaG7h4koRadt4No2dwzW8tdudKq1jL+7l0ytin19mtSRx9muNVhdWGIm8CrV1Rp4myilMNttqhsb5wHEv+/84hMDxsR4TH84m8LzW/NGtXb22XNXb/7Xnf8EvI+SIusIR2cAAAAASUVORK5CYII=",
      description: "Weissnat-Bashirian",
    },
  });
  const blogContextValue = {
    blogs,
    setBlogs,
  };
  return (
    <BlogContext.Provider value={blogContextValue}>
      {props.children}
    </BlogContext.Provider>
  );
};
export default BlogProvider;
