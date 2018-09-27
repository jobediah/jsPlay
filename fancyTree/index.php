<!DOCTYPE html>
<html>

<head>
  <title>Test Page</title> 
  <!-- Include jQuery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <!-- Include Fancytree skin and library -->
  <link href="https://cdn.jsdelivr.net/npm/jquery.fancytree@2.25.0/dist/skin-win8/ui.fancytree.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/jquery.fancytree@2.25/dist/jquery.fancytree-all-deps.min.js"></script>
  <!-- Initialize the tree when page is loaded -->
</head>
<body>
  <h3>Hello</h3>
  <!-- Define where the tree should appear -->
  <?php echo '<script src="./fancyTree.js"></script>';; ?>
  <div id="tree">
  <ul id="treeData" style="display: none;">
    <li id="1">Node 1
    <li id="2" class="folder">Folder 2
      <ul>
        <li id="3">Node 2.1
        <li id="4">Node 2.2
      </ul>
  </ul>
</div>

</body>

</html>
