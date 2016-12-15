Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "forwarded_port", guest: 80, host: 9090

  config.vm.provider "virtualbox" do |vb|
    vb.memory = "1024"
  end

  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install -y git zsh

    export BASE=/home/vagrant

    git clone git://github.com/robbyrussell/oh-my-zsh.git $BASE/.oh-my-zsh
    cp $BASE/.oh-my-zsh/templates/zshrc.zsh-template $BASE/.zshrc
    sudo chsh -s $(which zsh) vagrant
    zsh

    export NVM_DIR="$BASE/.nvm" && (
      git clone https://github.com/creationix/nvm.git "$NVM_DIR"
      cd "$NVM_DIR"
      git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" origin`
    ) && . "$NVM_DIR/nvm.sh"

    echo 'export NVM_DIR="$HOME/.nvm"' >> $BASE/.zshrc
    echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm' >> $BASE/.zshrc

    sudo chown -R vagrant:vagrant $BASE

    nvm install node
    npm install -g yarn

    ssh-keygen -b 4096 -t rsa -f ~/.ssh/id_rsa -q -N ""
    ssh-add ~/.ssh/id_rsa

    echo "*****************************************"
    echo "Now add this SSH key to your git account"
    cat ~/.ssh/id_rsa
    echo "*****************************************"
  SHELL
end
